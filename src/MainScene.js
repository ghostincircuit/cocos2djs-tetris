var MainScene = cc.Scene.extend({
    onEnter:function(){
        this._super();
        this.addChild(new StatusLayer());
        this.addChild(new MainLayer());
    }
});
