(function(a){function b(){var e=a("#pass1").val(),d=a("#user_login").val(),c=a("#pass2").val(),f;a("#pass-strength-result").removeClass("short bad good strong");if(!e){a("#pass-strength-result").html(pwsL10n.empty);return}f=passwordStrength(e,d,c);switch(f){case 2:a("#pass-strength-result").addClass("bad").html(pwsL10n.bad);break;case 3:a("#pass-strength-result").addClass("good").html(pwsL10n.good);break;case 4:a("#pass-strength-result").addClass("strong").html(pwsL10n.strong);break;case 5:a("#pass-strength-result").addClass("short").html(pwsL10n.mismatch);break;default:a("#pass-strength-result").addClass("short").html(pwsL10n["short"])}}a(document).ready(function(){a("#pass1").val("").keyup(b);a("#pass2").val("").keyup(b);a("#pass-strength-result").show();a(".color-palette").click(function(){a(this).siblings('input[name="admin_color"]').prop("checked",true)});a("#first_name, #last_name, #nickname").blur(function(){var c=a("#display_name"),e=c.find("option:selected").attr("id"),f=[],d={display_nickname:a("#nickname").val(),display_username:a("#user_login").val(),display_firstname:a("#first_name").val(),display_lastname:a("#last_name").val()};if(d.display_firstname&&d.display_lastname){d.display_firstlast=d.display_firstname+" "+d.display_lastname;d.display_lastfirst=d.display_lastname+" "+d.display_firstname}a("option",c).remove();a.each(d,function(i,h){var g;if(d[i].length&&a.inArray(h,f)==-1){f.push(h);g=i==e?'selected="selected"':"";c.append('<option id="'+i+'" '+g+'">'+h+"</option>")}})})})})(jQuery);