({
	fetchData : function(component) {
		let action = component.get('c.getProduct');
        
        action.setParams({
            productId: component.get('v.cardId')
        }); 
        
        action.setCallback(this, function(res) {
            if(res.getState() === 'SUCCESS') {
                component.set('v.data', res.getReturnValue());
            }
        });
        $A.enqueueAction(action);
	}
})
