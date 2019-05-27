'use strict';

module.exports = {
    "apps": [
        {
            "name": "blhx_redeem_code",
            "script": "app.js",
            "exec_mode": "cluster",
            'log_date_format': 'YYYY-MM-DD HH:mm Z',
            'kill_timeout': 60000,
            'instances': 1,
            "env": {
                NODE_ENV: "development"
            },
            "env_production": {
                NODE_ENV: "production"
            }
        }
    ]
};