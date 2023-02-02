<script type="text/javascript">
    // Function for Subscribe Messaging Function - JULIANA //
    $(document).ready(function () {
        var url = window.location.pathname;
        var dir = url.substring(url.lastIndexOf('/')).replace('/', '');
        $('span.toggleSetting, span.emailtoggle').hide();
        if (dir == "MainAccRevoke") {
            $("#grp1, #grp3").attr("checked", true);
            $("#grp2, #grp4, #grp5").prop("disabled", true);
            $("#unclass").addClass("active");
            $("#unclass, #unsubDisabled").css({'background-color': '#a0a0a0'});
            $("#unclass, #unsubDisabled").attr("disabled", true);
            $(".msgcheckbox").each(function () {
                var getCheckboxID = $(this).attr('id');
                var btnChecked = ($('#' + getCheckboxID).is(':checked'));
                var hasDefault = $('.sub' + getCheckboxID + ' .msgbtngrp label').is("#unclass");
                var chkhasClass = $('.sub' + getCheckboxID + ' .msgbtngrp label').hasClass('active');
                var isID = $(this).is('#' + getCheckboxID);
                if (btnChecked) {
                    $(this).addClass("revoke-checkbox");
                }
                $('.sub' + getCheckboxID + ' .msgbtngrp label').each(function () {
                    $(this).find("span.glyphicon-ok").show();
                    $(this).find("span.glyphicon-remove").hide();
                    var isUnsubscribe = $(this).children("input[type='checkbox']").prop('checked', true);
                    if (isUnsubscribe && btnChecked) {
                        $(this).addClass("active");
                    } else {
                        $(this).addClass("disabled");
                    }
                    $(this).on("click", function () {
                        var dd = $(this).hasClass('active');
                        var pp = $(this).hasClass('unsubscribe');
                        if (dd) {
                            $(this).addClass("unsubscribe");
                            $(this).find("span.glyphicon-ok").hide();
                            $(this).find("span.glyphicon-remove").show();
                        } else if (pp) {
                            $(this).removeClass("unsubscribe");
                            $(this).find("span.glyphicon-ok").show();
                            $(this).find("span.glyphicon-remove").hide();
                        }
                    });
               });
            });
        }
    });
    // END
</script>