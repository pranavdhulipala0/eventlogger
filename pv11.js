const insights = {
    init: function () {
      const events = ['load', 'click', 'dblclick', 'focus', 'change', 'resize'];

      events.forEach(event => {
        window.addEventListener(event, (e) => {
          this.sendEventData(event, e);
        });
      });
    },

    sendLoadData: () => {
      const timing = window.performance.timing;

      axios.post('http://localhost:5000/api/events/getLoad', {
        tenantId: user_details.tenantId,
        userId: user_details.userId,
        eventType: 'load',
        platform: navigator.platform,
        loadTime: timing.loadEventEnd ? timing.loadEventEnd - timing.requestStart : 0,
        url: window.location.href,
        client: window.location.hostname,
        route: window.location.pathname

      })
    },

    sendOnline: () => {
      axios.post('http://localhost:5000/api/events/getOnline', {
        tenantId: user_details.tenantId,
        userId: user_details.userId,
        eventType: 'online',
        url: window.location.href,
        client: window.location.hostname,
        route: window.location.pathname

      })
    },

    sendEventData: (eventType, event) => {
      axios.post('http://localhost:5000/api/events/getEvent', {
        tenantId: user_details.tenantId,
        userId: user_details.userId,
        eventType: eventType,
        eventLocation: event.currentTarget.location.href,
        xCoord: event.clientX,
        yCoord: event.clientY,
      })
    },
  };

  window.addEventListener('load', (e) => {
    insights.init();
    setTimeout(() => {
      insights.sendLoadData();
    }, 1000);
  });

  setInterval(()=>{
    insights.sendOnline();
  },5000)
