# MAYDAY MAYDAY!

## Setting

You are a student pilot flying solo when the engine fails in the middle of nowhere. You have to land safely.

```mermaid
graph TD;
Start-->Field;
Start-->Airport1;
Start-->Airport2;
Airport1-->Runway6;
Airport1-->Runway25;
Airport2-->Runway14;
Airport2-->Runway32;

```
## Story
You are a student pilot on your first solo, and the engine fails. You must pick the right airport and land or you die and your instructer gets fired because they signed you off. What will you do?

## Global variables

The most important variable is 'isDead,' which is how the thing knows if you have won or lost. Another important variable would be 'altitude,' which changes what you can do, and if you get too low, 'isDead' is automatically true (because you crash and die if you don't save the landing). Your altitude starts at 5000ft, and you have to decide what to do before it runs out.
