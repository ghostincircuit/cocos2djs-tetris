function Block(){
    var _parent = null;
    this._x = null;
    this._y = null;
    var _sprite = null;
    this.init = function(parent, x, y, pattern){
        this._x = x;
        this._y = y;
        var tx = x*g_block_size;
        var ty = y*g_block_size;
        _sprite = cc.Sprite.create(pattern);
        _sprite.scale = g_block_scale;
        _sprite.x = tx;
        _sprite.y = ty;
        _sprite.anchorX = 0;
        _sprite.anchorY = 0;
        parent.addChild(_sprite);
    };
    this.del = function(){
        _sprite.removeFromParent();
        delete _sprite;
    };
    this.moveDown = function(){
        this._y -= 1;
        _sprite.runAction(
            cc.MoveBy.create(g_min_delta, cc.p(0, -g_block_size)));
    };
    this.moveLeft = function(){
        this._x -= 1;
        _sprite.runAction(
            cc.MoveBy.create(g_min_delta, cc.p(-g_block_size, 0)));
    };
    this.moveRight = function(){
        this._x += 1;
        _sprite.runAction(
            cc.MoveBy.create(g_min_delta, cc.p(g_block_size, 0)));
    };
    this.moveTo = function(x, y){
        this._x = x;
        this._y = y;
        var tx = x*g_block_size;
        var ty = y*g_block_size;
        _sprite.x = tx
        _sprite.y = ty;
    };
    this.moveBy = function(x, y){
        this._x += x;
        this._y += y;
        var tx = x*g_block_size;
        var ty = y*g_block_size;
        _sprite.x += tx
        _sprite.y += ty;
    };

}
