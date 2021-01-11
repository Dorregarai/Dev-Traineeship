({
    doInit: function(component, event, helper) {
        helper.fetchData(component);
    },
    
    closeModal: function(component, event, helper) {
        component.getEvent('modalVarChange').setParams({
            isModalOpen: false
        }).fire();
    }
})
