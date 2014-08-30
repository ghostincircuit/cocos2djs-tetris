var OverScene = cc.Scene.extend({
    onEnter:function(){
        this._super();
        cc.director.pause();
        this.addChild(new StatusLayer());
        this.addChild(new MainLayer());
    }

});

var OverLayer = cc.Layer.extend({
    ctor:function(){
        this._super();
        var label = cc.LabelTTF.create(
            "GAME OVER\npress to start again",
            "Arial",
            50
        );
        cc.director.pause();
        label.x = g_screen_width/2;
        label.y = g_screen_height/2;
        this.addChild(label);
    }
});
