const eventLogger = {
    init: function() {
        const events = ['load', 'click', 'dblclick', 'focus', 'change', 'scroll', 'resize'];

        events.forEach(event => {
            window.addEventListener(event, (e) => {
              console.log(e)
                this.sendEventData(event, e);
            });
        });
    },

    sendEventData: (eventType, event) => {
        axios.post('http://localhost:5000/api/middleware/getDetails', {
            tenantId:tenantId,
            userId:userId,
            eventType: eventType,
            eventLocation: event.currentTarget.location.href,
            xCoord: event.clientX,
            yCoord: event.clientY,
        });
    }
};

eventLogger.init();
