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
        try{
        var timing = window.performance.timing;
        axios.post('http://localhost:5000/api/middleware/getDetails', {
            tenantId:user_details.tenantId,
            userId:user_details.userId,
            platform: navigator.platform,
            eventType: eventType,
            loadTime: timing.loadEventEnd - timing.navigationStart,
            eventLocation: event.currentTarget.location.href,
            xCoord: event.clientX,
            yCoord: event.clientY,
        });
    }
    catch(e){
        console.log("Couldn't send");
    }
};

eventLogger.init();
