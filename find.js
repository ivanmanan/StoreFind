ItemsList  = new Mongo.Collection('items');
StoresList = new Mongo.Collection('stores');
// Can use itemsList to list out all previous history of items

if (Meteor.isClient)
{
    var itemCount = 0;
    
    // Search Items    

    Template.itemsList.helpers({
	'item': function()
	{
	    return ItemsList.find();
	},
	'selectedItem': function()
	{
	    var selectedItem = Session.get('selectedItem');
	    return ItemsList.findOne({_id:selectedItem});
	}
    });
    
    Template.itemsList.events({
	'click .remove': function()
	{
	    // var itemID = this._id;
	    // Session.set('selectedItem', itemID);
	    // var selectedItem = Session.get('selectedItem');
	    // ItemsList.remove({_id:selectedItem});

	    // Fix this remove option later
	}	
    });



    
    // Auxillary Functions
    Template.addItem.events({
	'submit form': function(event)
	{
	    event.preventDefault();
	    var itemNameVar = event.target.itemName.value;
	    ItemsList.insert({
		name: itemNameVar,
		order: itemCount
	    });
	    itemCount++;
	    event.target.itemName.value = "";
	    // Clears the text box
	}
    });

////////////////////////////////////////////////////////////////
// Stores

    Template.storesList.helpers({

    });

    Template.storesList.events({

    });

}




if (Meteor.isServer)
{

    
}
