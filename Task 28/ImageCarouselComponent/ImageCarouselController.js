({
	doInit : function(component, event, helper) {
		let action = component.get('c.getCar');
        
        action.setParams({
            carId: component.get('v.recordId')
        })
        
        action.setCallback(this, function(res) {
            let state = res.getState();
            if(state === 'SUCCESS') {
                component.set('v.carData', res.getReturnValue().car[0]);
                component.set('v.carAttachments', res.getReturnValue().carAttachment);
                console.log(component.get('v.carData.Name'));
            }
        });
        $A.enqueueAction(action);
	}
})
