# Understanding Canvas State

Each context maintains a drawing state, which your code can manage.

You can save the current state and restore a previous one.

The state can be pushed onto a stack of saved states.

The canvas state keeps track of several properties of the canvas:

  1. Current values of lineWidth, strokeStyle, fillStyle, lineCap, etc.
  2. Current transformation matrix.
  3. Current clipping region.

Your code may have set up a whole bunch of complex drawing settings that you don't want to have to manually keep track of.

<table>
  <tr>
    <th>Function</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><pre>save()</pre></td>
    <td>Will save the canvas state.</td>
  </tr>
  <tr>
    <td><pre>restore()</pre></td>
    <td>Will restore the state on top of the stack.</td>
  </tr>
</table>


The process usually runs:
  1. Call `ctx.save()`
  2. Perform a set of drawing operations, which may change the state.
  3. Call `ctx.restore()`

Refer to [Drawing State](https://github.com/l4nk332/notebook/blob/master/JavaScript/HTML5_Canvas/canvas_snippets.md#drawing-state) section in *canvas_snippets.md* file for examples.
