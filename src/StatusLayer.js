var StatusLayer = cc.Layer.extend({
    ctor:function(){
        this._super();
        g_status_layer = this;
        var bg = new cc.LayerColor(
            cc.color(255, 255, 255, 128),
            g_bar_width,
            g_screen_height);
        bg.anchorX = 0;
        bg.anchorY = 0;
        bg.x = g_screen_width - g_bar_width;
        //bg.y = g_screen_height;
        bg.y = 0;
        this.addChild(bg, 0, cc.TAG_LAYER);

        this.label_score = cc.LabelTTF.create("SCORE",
                                              "Arial",
                                              g_font_size);
        this.label_score.anchorX = 0;
        this.label_score.anchorY = 0;
        this.label_score.x = g_label_score_x;
        this.label_score.y = g_label_score_y;
        this.addChild(this.label_score);

        this.string_score = cc.LabelTTF.create("-",
                                               "Arial",
                                               g_font_size);
        this.string_score.anchorX = 0;
        this.string_score.anchorY = 0;
        this.string_score.x = g_string_score_x;
        this.string_score.y = g_string_score_y;
        this.addChild(this.string_score);


         this.label_next = cc.LabelTTF.create("NEXT",
                                             "Arial",
                                             g_font_size);
        this.label_next.anchorX = 0;
        this.label_next.anchorY = 0;
        this.label_next.x = g_label_next_x;
        this.label_next.y = g_label_next_y;
        this.addChild(this.label_next);
        this.samp = null;
    },
    cb:function(){
        this.cnt++;
        this.updateScore(this.cnt);
        if (this.cnt == 20){
            var sched = cc.director.getScheduler();
            sched.unscheduleAllCallbacksForTarget(this);
        }
    },

    updateScore:function(score){
        this.string_score.setString(score.toString());
    },
    
    updateNext:function(samp){
        if (this.samp != null) {
            for (var i = 0; i < this.samp.blks.length; i++) {
                this.samp.blks[i].del();
            }
        }
        this.samp = samp;
    }
});
