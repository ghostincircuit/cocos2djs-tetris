var g_font_size = 10;

var g_screen_width = 320;
var g_screen_height = 480;

var g_bar_width = g_screen_width * 0.3;

var g_gscreen_width = g_screen_width - g_bar_width;
var g_gscreen_height = g_screen_height;

var g_label_score_x = g_screen_width - 0.8 * g_bar_width;
var g_label_score_y = g_screen_height * .25;

var g_string_score_x = g_label_score_x;
var g_string_score_y = g_label_score_y - g_font_size*2;

var g_label_next_x = g_label_score_x;
var g_label_next_y = g_screen_height * .75;

var g_tick_interval = 0.1;

var g_min_delta = g_tick_interval;

var g_block_cols = 12;
var g_block_size = g_gscreen_width / g_block_cols;
var g_block_rows = Math.floor(g_gscreen_height/g_block_size) - 2;

var g_block_scale = g_block_size/100;

var g_samp_col = g_block_cols + 3;
var g_samp_row = Math.floor(g_label_next_y/g_block_size) -5;

var g_speed = 4;
