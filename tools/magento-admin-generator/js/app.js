var user = {
	firstname: '',
	lastname: '',
	email: '',
	username: '',
	password: '',
	hashed_password: ''
};

var sources = {};

var editor = CodeMirror.fromTextArea(document.getElementById('output'), {
	lineNumbers: true,
	mode: 'mysql'
});

function salter(l) {
	var c = "abcdefghiklmnopqrstuvwxyz";
	c += c.toUpperCase();
	var s = '';
	for (var i = 0; i < l; i++) {
		var n = Math.floor(Math.random() * c.length);
		s += c.substring(n, n + 1);
	}
	return s;
}

function update_content(source)
{
	var template = Handlebars.compile(source);
	var html = template(user);
				
	$('#output').val(html);
	editor.setValue(html);
	
}

function form_change(field, value)
{			
	if (field == 'password') {
		if (value) {
			var salt = salter(2);
			user.hashed_password = hex_md5(salt+value)+':'+salt;
		} else {
			user.hashed_password = null;
		}
	}
	
	var version = $('#version').val();
	
	if (sources[version]) {
		update_content(sources[version]);
	} else {				
		$.get('template/'+version+'.html', function(source, status) {					
			update_content(source);					
			sources[version] = source;
		});
	}
	
}

$(document).ready(function() {		
	$('form input').bind('keyup change', function() {					
		var field = $(this).attr('name');
		var val = $(this).val();
		user[field] = val;
		
		form_change(field, val);
	});
	
	$('#version').change(function() {
		form_change();
	});
	
	form_change();
});