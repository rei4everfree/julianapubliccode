@{
    ViewBag.Title = "switch class by dir";
}
<script>
    $(function () {
        var url = window.location.pathname;
        var dir = url.substring(url.lastIndexOf('/')).replace('/', '');
        switch (dir) {
            case 'phones':
                $("[id^='mp']").removeClass("active");
                break;
            case 'toys':
                $("#mp0").addClass("active");
                break;
            case 'cars':
                $("#mp1").addClass("active");
                break;
            case 'apperal-sub1':
                $("#mp3, #mp3-1").addClass("active");
                break;
            case 'apperal-sub2':
                $("#mp3, #mp3-2").addClass("active");
                break;
            case 'apperal-sub3':
                $("#mp3, #mp3-3").addClass("active");
                break;
            default: ;
        }
    });
</script>
        <div id="leftMenuManAcc" class="scrollMenu">
            <ul>
                <li id="mp0"><a href='@Url.Action("phones", "Home")'><span class="highlight">@Labels.LPHONES</span></a></li>
                <li id="mp1"><a href='@Url.Action("toys", "Home")'>@Labels.LTOYS</a></li>
                <li class="has-sub" id="mp3">
                    <a href="#">@Labels.LManAccMenu3</a>
                    <ul>
                        <li id="mp3-1"><a href='@Url.Action("apperal-sub1", "Home")'><span class="highlight">@Labels.LAPPSUB1</span></a></li>
                        <li id="mp3-2"><a href='@Url.Action("apperal-sub2", "Home")'>@Labels.LAPPSUB2</a></li>
                        <li id="mp3-3"><a href='@Url.Action("apperal-sub3", "Home")'>@Labels.LAPPSUB3</a></li>
                    </ul>
                </li>
            </ul>
        </div>