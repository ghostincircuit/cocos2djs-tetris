function BaseShape(){
    this.isLanded = function(dead){
        for (var i = 0; i < this.blks.length; i++) {
            if (this.blks[i]._y == 0)
                return true;
            if (dead[this.blks[i]._x][this.blks[i]._y-1] != null) {
                return true;
            }
        }
    };

    this.willCollide = function(list, dead){
        for (var i = 0; i < list.length; i++) {
            var x = list[i]._x;
            var y = list[i]._y;
            if (y < 0 || x < 0 || x == g_block_cols)
                return true;
            if (dead[x][y] != null)
                return true;
        }
        return false;
    }

    this.move = function(x, y, dead){
        var list = [];
        for (var i = 0; i < this.blks.length; i++) {
            list[i] = new Object();
            list[i]._x = this.blks[i]._x + x;
            list[i]._y = this.blks[i]._y + y;
        }
        var valid = this.willCollide(list, dead);
        if (valid == true)
            return;
        for (var i = 0; i < this.blks.length; i++) {
            this.blks[i].moveBy(x, y);
        }
    };

    this.moveToNoCheck = function(x, y){
        var vx = x - this.blks[0]._x;
        var vy = y - this.blks[0]._y;
        for (var i = 0; i < this.blks.length; i++) {
            this.blks[i].moveBy(vx, vy);
        }
    };

    this.rotate = function(dead){
        var shape = [];
        for (var i = 0; i < this.blks.length; i++)
            shape[i] = new Object();
        for (var i = 0; i < this.blks.length; i++) {
            var vx = this.blks[i]._x - this.blks[0]._x;
            var vy = this.blks[i]._y - this.blks[0]._y;
            var nvx = vy;
            var nvy = -vx;
            shape[i]._x = nvx + this.blks[0]._x;
            shape[i]._y = nvy + this.blks[0]._y;
        }
        var v = this.willCollide(shape, dead);
        if (v == true)
            return;
        for (var i = 0; i < shape.length; i++) {
            this.blks[i].moveTo(shape[i]._x, shape[i]._y);
        }
    };
}

function Box(){
    this.init = function(parent, x, y){
        this.blks = [];
        for (var i = 0; i < 4; i++)
            this.blks[i] = new Block();

        this.blks[0].init(parent, x, y, res.BlockRed);
        this.blks[1].init(parent, x+1, y, res.BlockRed);
        this.blks[2].init(parent, x, y+1, res.BlockRed);
        this.blks[3].init(parent, x+1, y+1, res.BlockRed);
    };


    this.rotate = function(dead){
    };

}
Box.prototype = new BaseShape();

function Bar(){
    this.init = function(parent, x, y){
        this.blks = [];
        for (var i = 0; i < 4; i++)
            this.blks[i] = new Block();
        this.state = 0;
        this.blks[0].init(parent, x, y+0, res.BlockBlue);
        this.blks[1].init(parent, x, y-1, res.BlockBlue);
        this.blks[2].init(parent, x, y+1, res.BlockBlue);
        this.blks[3].init(parent, x, y+2, res.BlockBlue);
    };

}
Bar.prototype = new BaseShape();

function LLL(){
    this.init = function(parent, x, y){
        this.blks = [];
        this.state = 0;
        for (var i = 0; i < 4; i++)
            this.blks[i] = new Block();

        this.blks[0].init(parent, x, y, res.BlockGreen);
        this.blks[1].init(parent, x+1, y, res.BlockGreen);
        this.blks[2].init(parent, x, y+1, res.BlockGreen);
        this.blks[3].init(parent, x, y+2, res.BlockGreen);
    };
}
LLL.prototype = new BaseShape();

function TTT(){
    this.init = function(parent, x, y){
        this.blks = [];
        this.state = 0;
        for (var i = 0; i < 4; i++)
            this.blks[i] = new Block();
        this.blks[0].init(parent, x, y, res.BlockYellow);
        this.blks[1].init(parent, x+1, y, res.BlockYellow);
        this.blks[2].init(parent, x-1, y, res.BlockYellow);
        this.blks[3].init(parent, x, y+1, res.BlockYellow);
    };
}
TTT.prototype = new BaseShape();

function L77(){
    this.init = function(parent, x, y){
        this.blks = [];
        this.state = 0;
        for (var i = 0; i < 4; i++)
            this.blks[i] = new Block();
        this.blks[0].init(parent, x, y, res.BlockRed);
        this.blks[1].init(parent, x+1, y, res.BlockRed);
        this.blks[2].init(parent, x, y-1, res.BlockRed);
        this.blks[3].init(parent, x, y-2, res.BlockRed);
    };
}
L77.prototype = new BaseShape();

function factory(n){
    var nn = n % 5;
    switch (nn) {
    case 0:
        return new Box();
    case 1:
        return new Bar();
    case 2:
        return new LLL();
    case 3:
        return new TTT();
    case 4:
        return new L77();

    }
}
