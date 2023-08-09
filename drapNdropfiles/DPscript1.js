let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let canvas_width = canvas.width;
let canvas_height = canvas.height;
let offset_x;
let offset_y;

let get_offset = function () {
    let canvas_offsets = canvas.getBoundingClientRect();
    offset_x = canvas_offsets.left;
    offset_y = canvas_offsets.top;
}

get_offset();
window.onscroll = function () { get_offset(); }
window.onresize = function () { get_offset(); }
window.onresize = function () { get_offset(); }

let shapes = [];
let bubbles = [];
let current_shape_index = null;
let is_dragging = false;
let startX;
let startY;

let PCimg = new Image();
PCimg.src = "images/mipsPCitem.png";
let IMimg = new Image();
IMimg.src = "images/mipsIMitem.png";
let RFimg = new Image();
RFimg.src = "images/mipsRFitem.png";


/*COME BACK AND ADJUST THE SIZING OF SAID IMAGES TO BE PERCENTAGES/VIEWER WIDTHS
INSTEAD OF PIXELS, WHEN RESIZING WINDOW, THERE ARE ISSUES WITH SIZE OF ITEMS*/
PCimg.onload = function () {
    //for x, if u want percentages use: let xSpot = (window.innerWidth * viewerWidthPercentage) / 100;
    shapes.push({ x: 150, y: 50, width: 70, height: 140, image: PCimg, bubbles: [] });
    draw_shapes();
    draw_bubbles();
};
IMimg.onload = function () {
    shapes.push({ x: 500, y: 100, width: 140, height: 140, image: IMimg, bubbles: [] });
    draw_shapes();
    draw_bubbles();
};
RFimg.onload = function () {
    shapes.push({ x: 800, y: 200, width: 140, height: 140, image: RFimg, bubbles: [] });
    draw_shapes();
    draw_bubbles();
};


//shapes.push({x: 200, y: 50, width: 200, height: 200, color: 'red'}); this draws a red rectangle


let is_mouse_in_shape = function (x, y, shape) {
    let shape_left = shape.x;
    let shape_right = shape.x + shape.width;
    let shape_top = shape.y;
    let shape_bottom = shape.y + shape.height;

    if (x > shape_left && x < shape_right && y > shape_top && y < shape_bottom) {
        return true;
    }
    return false;
}

let mouse_down = function (event) {
    event.preventDefault();

    startX = parseInt(event.clientX - offset_x);
    startY = parseInt(event.clientY - offset_y);

    let index = 0;
    for (let shape of shapes) {
        if (is_mouse_in_shape(startX, startY, shape)) {
            current_shape_index = index;
            is_dragging = true;
            return;
        }
        index++;
    }
}

let mouse_up = function (event) {
    if (!is_dragging) {
        return;
    }
    event.preventDefault();
    is_dragging = false;
    console.log(event);
}

let mouse_out = function (event) {
    if (!is_dragging) {
        return;
    }
    event.preventDefault();
    is_dragging = false;
}

let mouse_move = function (event) {
    if (!is_dragging) {
        return;
    }
    else {
        event.preventDefault();
        let mouseX = parseInt(event.clientX - offset_x);
        let mouseY = parseInt(event.clientY - offset_y);

        let dx = mouseX - startX;
        let dy = mouseY - startY;

        let current_shape = shapes[current_shape_index];
        current_shape.x += dx;
        current_shape.y += dy;

        for (let bubble of current_shape.bubbles) {
            bubble.x += dx;
            bubble.y += dy;
            bubble.hovered = is_mouse_in_bubble(mouseX, mouseY, bubble);
        }

        draw_shapes();
        draw_bubbles();

        startX = mouseX;
        startY = mouseY;
    }
}

canvas.onmousedown = mouse_down;
canvas.onmouseup = mouse_up;
canvas.onmouseout = mouse_out;
canvas.onmousemove = mouse_move;

let draw_shapes = function () {
    context.clearRect(0, 0, canvas_width, canvas_height);
    for (let shape of shapes) {
        if (shape.image) {
            context.drawImage(shape.image, shape.x, shape.y, shape.width, shape.height);
        } else {
            context.fillStyle = shape.color;
            context.fillRect(shape.x, shape.y, shape.width, shape.height);
        }
        if (shape.image == IMimg){
            //If the shape is IM, these are the bubbles rendered for it. They are unique
            shape.bubbles = [
                { x: shape.x + shape.width + 10, y: shape.y + shape.height / 2, radius: 5, hovered: false },
                { x: shape.x - 10, y: shape.y + shape.height / 2, radius: 5, hovered: false }
            ];
        }
        else if (shape.image == RFimg){
            shape.bubbles = [
                { x: shape.x + shape.width + 10, y: shape.y + shape.height / 2 + 11, radius: 5, hovered: false },
                { x: shape.x + shape.width + 10, y: shape.y + shape.height / 3.5, radius: 5, hovered: false },
                { x: shape.x - 10, y: shape.y + shape.height / 2 + 27, radius: 5, hovered: false },
                { x: shape.x - 10, y: shape.y + shape.height / 2, radius: 5, hovered: false },
                { x: shape.x - 10, y: shape.y + shape.height / 3.5, radius: 5, hovered: false },
                { x: shape.x - 10, y: shape.y + shape.height / 10, radius: 5, hovered: false }
            ];
        }
        else if (shape.image == PCimg){
            shape.bubbles = [
                { x: shape.x + shape.width + 10, y: shape.y + shape.height / 2, radius: 5, hovered: false },
                { x: shape.x - 10, y: shape.y + shape.height / 2, radius: 5, hovered: false }
            ];
        }
        
    }
};


let draw_bubbles = function () {
    for (let shape of shapes) {
        for (let bubble of shape.bubbles) {
            context.beginPath();
            context.arc(bubble.x, bubble.y, bubble.radius, 0, 2 * Math.PI);
            context.fillStyle = bubble.hovered ? 'red' : 'blue';
            context.fill();
            context.closePath();
        }
    }
};

let is_mouse_in_bubble = function (x, y, bubble) {
    let dx = x - bubble.x;
    let dy = y - bubble.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    return distance <= bubble.radius;
};



draw_shapes();
