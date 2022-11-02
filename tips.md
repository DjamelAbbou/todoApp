1.Make it _run_(just get the thing), make it _right_ (no bugs, or wrong output), make it _fast_ (extract refactor, when? when its a full concept based on nouns or behaviors)

4.Make it **GENERIC**(using render props), example: PollList _Nop_ only useful for Polls, **List** Yes!, useful for any kind of list
function list(collection, renderItem) {
{collection.map((item) => **renderItem(item)**)}
}  
 the **renderItem** function, will decide how each
item (poll, posts, article...) will be rendered.

2.concern ur self with one thing forget about server(if u on frontend) auth whtvr, cuz when on team u dont know what technology theill be using so it has to be an all flavor technology frontend

3.whoever writes ur _Paycheck_ is gonna be **VERY UPSET**(remember aziz) when he hears that ur worrying about things that are not as important because ur trying to **make things perfect**, move on, and when they say, this thing is not right, thennnn u can try to make it perfect or whtvr

5.if it's **not buisness logic**, then dont extract it, cuz its just markup.

6.ok <TextField />, this thing might have a <label> and an <input>, put them both in it and bom u have 2 reasons why <TextField /> might change, which is _bad_, u only want to have one reason for it to change, plus its a violation of the dry principle
