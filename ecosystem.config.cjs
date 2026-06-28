module.exports = {
  apps: [
    {
      name: 'cueai-backend',
      script: './index.js',
      instances: 'max',       // Utilize all available CPU cores (Cluster mode)
      exec_mode: 'cluster',   // Enable Load Balancing
      max_memory_restart: '1G', // Gracefully restart if the process exceeds 1GB RAM
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      merge_logs: true,
      time: true
    }
  ]
};
