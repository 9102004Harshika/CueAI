import Organization from '../models/Organization.js';
import User from '../models/User.js';

export const createOrganization = async (req, res) => {
    try {
        const { name, ownerId, billingEmail } = req.body;
        
        const org = new Organization({
            name,
            ownerId,
            billingEmail,
            members: [{ userId: ownerId, role: 'OWNER', status: 'ACTIVE' }]
        });
        
        await org.save();
        
        // Update user's organizations array (assuming it exists in User model)
        // await User.findByIdAndUpdate(ownerId, { $push: { organizations: org._id } });

        res.status(201).json({ success: true, organization: org });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const inviteMember = async (req, res) => {
    try {
        const { orgId } = req.params;
        const { email, role } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const org = await Organization.findById(orgId);
        if (!org) {
            return res.status(404).json({ success: false, message: 'Organization not found' });
        }

        // Check if already a member
        if (org.members.some(m => m.userId.toString() === user._id.toString())) {
            return res.status(400).json({ success: false, message: 'User is already a member' });
        }

        org.members.push({ userId: user._id, role, status: 'PENDING' });
        await org.save();

        res.status(200).json({ success: true, message: 'Invitation sent', organization: org });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getOrganizations = async (req, res) => {
    try {
        const { userId } = req.query; // Assuming userId is passed via query for simplicity
        
        const orgs = await Organization.find({ 
            'members.userId': userId 
        }).populate('members.userId', 'name email avatarUrl');

        res.status(200).json({ success: true, organizations: orgs });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
