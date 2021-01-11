({
	doInit: function(component, event, helper) {
		helper.fetchData(component);
	},
    
    handleSliderChange: function(component, event, helper) {
        component.set('v.sliderValue', event.getParam('value'));
        
		helper.fetchData(component);
    },
    
    handleSearchChange: function(component, event, helper) {
        component.set('v.searchValue', event.getParam('value'));
        
		helper.fetchData(component);
    },
    
    handleSelectChange: function(component, event, helper) {
        component.set('v.currencyCode', component.find('selectCurrency').get('v.value'));
        
		helper.fetchData(component);
    },
    
    handleCardClick: function(component, event, helper) {
        component.set('v.cardId', event.currentTarget.dataset.id);
        component.set('v.isModalOpen', true);
    },
    
    handleCloseCarDetail: function(component, event, helper) {
        component.set('v.isModalOpen', event.getParam('isModalOpen'));
    }
})
