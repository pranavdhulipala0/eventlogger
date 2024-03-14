const eventLogger = {
    init: function() {
        const events = ['load', 'click', 'dblclick', 'focus', 'change', 'resize'];

        events.forEach(event => {
            window.addEventListener(event, (e) => {
              console.log(e)
                this.sendEventData(event, e);
            });
        });
    },

    sendEventData: (eventType, event) => {
        axios.post('http://localhost:5000/api/middleware/getDetails', {
            tenantId:user_details.tenantId,
            userId:user_details.userId,
            platform: navigator.platform,
            eventType: eventType,
            eventLocation: event.currentTarget.location.href,
            xCoord: event.clientX,
            yCoord: event.clientY,
        });
    }
};

eventLogger.init();
