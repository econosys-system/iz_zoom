// iz_zoom.js (c) econosys system   http://econosys-system.com/
// iz_zoom page   http://econosys-system.com/iz_zoom.html
// version 3.00

(function($) {

    $.fn.iz_zoom = function(options) {

        var _this = this;
        var iz_zoom_box_id = 'iz_zoom_box';
        var template_html = 'ddd';
        var pos_x;
        var pos_y;

        var methods = {
            init: function(options) {},

            _set_style: function() {
                _this.css({
                    'cursor': 'pointer'
                });
            },

          	_get_position: function(dom_obj){
          		var	position = {
                x: _this.offset().left,
                y: _this.offset().top,
              };
              if ( options.x ){ position.x = position.x + options.x; }
              if ( options.y ){ position.y = position.y + options.y; }
          		return position;
          	},

            _preload_image: function(){
              var img = new Image();
              var retinaCheck = window.devicePixelRatio;
              if( options['imagefile@2x'] && retinaCheck >= 2) {
                img.src = options['imagefile@2x'];
              }else{
                img.src = options.imagefile;
              }
            } ,

            _create_zoom_box: function() {
                if (!$('#' + iz_zoom_box_id).length) {
                    $(document.body).append($('<div id="' + iz_zoom_box_id + '"></div>'));
                }


                $.get(options.templatefile, function(data, status) {
                    template_html = data;
                });
                var style = '<link rel="stylesheet" href="' + options.cssfile +'">';
                $('head link:last').after(style);

                pos_x = this._get_position($(options.relative_id)).x;
                pos_y = this._get_position($(options.relative_id)).y;

                $('#' + iz_zoom_box_id).css({
                    'animation-fill-mode' : 'forwards' ,
                    'opacity': 0,
                    'cursor': 'pointer',
                    'position': 'absolute',
                    'top'   : 0 ,
                    'left'  : 0 ,
                    'right' : 0 ,
                    'bottom': 0 ,
                    'width' : '0px' ,
                    'height': '0px' ,
                    'display': 'block',
                    'visibility': 'hidden',
                });
            },

            _register_events: function() {
              $('#' + iz_zoom_box_id).off('mousedown');
              $('#' + iz_zoom_box_id).on( 'mousedown', function() {
                $('#' + iz_zoom_box_id).css({
                  'visibility': 'visible',
                  'animation'           : 'iz_zoom_off_kf 1s linear 0s 1 normal' ,
                  'animation-fill-mode' : 'forwards' ,
                });
              });
            }
         };


        // Core
        methods._set_style();
        methods._create_zoom_box();
        methods._register_events();
        methods._preload_image();

        _this.hover(function() {});
        _this.mousedown(function() {
/*
            var now_opacity = $('#' + iz_zoom_box_id).css('opacity');
            if ( now_opacity > 0 && now_opacity < 1 ) {
                $('#' + iz_zoom_box_id).css({
                });
            }
*/
            $('#' + iz_zoom_box_id).empty();
            if (options['imagefile@2x']){
              options.srcset = 'srcset="' + options.imagefile +' 1x, '+ options['imagefile@2x'] +' 2x"';
            }
            $.tmpl(template_html, options).appendTo('#' + iz_zoom_box_id);

            $('#' + iz_zoom_box_id).css({
              'animation'           : 'none' ,
            });

            setTimeout(function() {
                $('#' + iz_zoom_box_id).css({
                  'visibility': 'visible',
                  'top'           : pos_y + 'px',
                  'left'          : pos_x + 'px',
                  'animation'           : 'iz_zoom_on_kf 1s linear 0s 1        normal' ,
                  'animation-fill-mode' : 'forwards' ,
                });
            }, 0);


        });



    };
}(jQuery));
