const axios = require('axios');

const statusPageApiKey = '0e94c87553074d66a1491d91bdb691f7';
    const pageId = '266y9bdyj6sf';
    const itemId = 'wjcm5tc61y85';

    axios({
        method: 'patch',
        url: `https://api.statuspage.io/v1/pages/${pageId}/components/${itemId}`,
        headers: {
            'Authorization': `OAuth ${statusPageApiKey}`,
            'Content-Type': 'application/json'
        },
        data: {
            component: {
                status: 'operational'
            }
        }
    })
    .then(response => {
        console.log('Statuspage item set to operational:', response.data);
    })
    .catch(error => {
        console.error('Error setting Statuspage item to operational:', error);
    });