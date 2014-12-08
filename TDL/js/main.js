$( document ).ready(function() {
	var tdList = $('#tdlApp ul');
	var tdMask = 'tdl_';

function showTasks() {
	var lsLen = localStorage.length;
	if(lsLen > 0) {
		for (var i = 0; i < lsLen; i++) {
			var key = localStorage.key(i);
			if (key.indexOf(tdMask) == 0) {
				$('<li></li>').addClass('tdItem')
	    		.attr('data-item-id', key)
	    		.text(localStorage.getItem(key)).appendTo(tdList);
			}
		}
	}
}

showTasks();

    $('#tdlApp input').on('keydown',function(e){
    	if (e.keyCode != 13)
    		return;
    	var str = e.target.value;
    	e.target.value = '';

    	if (str.length > 0) {
    		var nId = 0;

    		tdList.children().each(function(index, el) {
    			var jelId = $(el).attr('data-item-id').slice(4);
    			if (jelId > nId)
    				nId = jelId;
    		})
    		nId++;


    		localStorage.setItem(tdMask + nId,str);

    		$('<li></li>').addClass('tdItem')
    		.attr('data-item-id',tdMask + nId)
    		.text(str).appendTo(tdList);
    	}
    });

    $(document).on('click','.tdItem',function(e){
    	var jet = $(e.target);
    	localStorage.removeItem(jet.attr('data-item-id'));
    	jet.remove();
    })
});