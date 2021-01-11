({
	fetchData : function(component) {
		let action = component.get('c.getProducts');
        
        action.setParams({
            name: component.get('v.searchValue'),
            price: component.get('v.sliderValue'),
            currencyCode: component.get('v.currencyCode')
        }); 
        
        action.setCallback(this, function(res) {
            if(res.getState() === 'SUCCESS') {
                component.set('v.data', res.getReturnValue());
            }
        });
        $A.enqueueAction(action);
	}
})
