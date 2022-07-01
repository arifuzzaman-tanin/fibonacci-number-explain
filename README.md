### HOW TO CALCULATE FIBONACCI ?

<p style="margin-top:0px;margin-bottom:0px;">Rule</p>
<p style="margin-top:0px;margin-bottom:0px;">F<sub><small>n</small></sub> = F<small><sub>n-2</sub></small> + F<small><sub>n-1</sub></small></p>

<p>Now calculation of fibonacci number for n = 5</p>
<p style="margin-top:0px;margin-bottom:0px;">F<small><sub>5</sub></small> = F<sub>3</sub> + F<sub>4</sub></p>
<p style="margin-top:0px;margin-bottom:0px;">F<small><sub>3</sub></small> = F<sub>1</sub> + F<sub>2</sub></p>
<p style="margin-top:0px;margin-bottom:0px;">F<small><sub>4</sub></small> = F<sub>2</sub> + F<sub>3</sub></p>

<small style="margin-top:0px;margin-bottom:0px;">In fibonacci series 0 & 1 are the fibonacci for 1 & 2. For that reason</small>

<p style="margin-bottom:0px;">F<small><sub>1</sub></small> = 0</p>
<p style="margin-top:0px;margin-bottom:0px;">F<small><sub>2</sub></small> = 1</p>

<p style="margin-bottom:0px;">We know from the previous calculation</p>
<p style="margin-top:0px;margin-bottom:0px;">F<small><sub>5</sub></small> = F<sub>3</sub> + F<sub>4</sub></p>
<p style="margin-top:0px;margin-bottom:0px;">F<small><sub>5</sub></small> = F<sub>1</sub> + F<sub>2</sub> + F<sub>4</sub></p>
<p style="margin-top:0px;margin-bottom:0px;">F<small><sub>5</sub></small> = F<sub>1</sub> + F<sub>2</sub> + F<sub>2</sub> + F<sub>3</sub></p>
<p style="margin-top:0px;margin-bottom:0px;">F<small><sub>5</sub></small> = F<sub>1</sub> + F<sub>2</sub> + F<sub>2</sub> + F<sub>1</sub> + F<sub>2</sub></p>
<p style="margin-top:0px;margin-bottom:0px;">F<small><sub>5</sub></small> = 0 + 1 + 1 + 0 + 1</p>
<p style="margin-top:0px;margin-bottom:0px;">F<small><sub>5</sub></small> = 3 </p>

<p style="margin-top:0px;margin-bottom:0px;">The <b>5</b><small><sub>th</sub></small> number fibonacci is <b>3</b></p>

### HOW TO RUN

<small style='color:gray'>To compile TypeScript to javascript, run the command.</small>

```diff
tsc
```

<small style='color:gray'>Run the main js file</small>

```diff
node main.js
```

<small style='color:gray'>
TypeScript has a dependency of <b>node js</b>, if node js is not available on your machine then install the node js.
</small>
