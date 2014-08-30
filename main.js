var g_status_layer = null;
var g_main_layer = null;
var g_ctrl = null;

cc.game.onStart = function(){
    cc.view.setDesignResolutionSize(
        g_screen_width,
        g_screen_height,
        cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);
    //load resources
    cc.LoaderScene.preload(g_resources, function () {
        cc.director.runScene(new MainScene());
        g_ctrl = new GameController();
        g_ctrl.init();
    }, this);
};
cc.game.run();
