

## Design

### Interface

```ts
function setTour
```
- "Change" function (ie. a function that alters contract state)
- Receives a `Tour` object as a parameter, creates a new Tour and returns the success message

```ts
function getTour
```
- "View" function (ie. a function that does not alter contract state)
- Receives a Tour's `id` as parameter
- Returns a Tour object

```ts
function getTours
```
- "View" function (ie. a function that does not alter contract state)
- Returns the whole Tours details/content

```ts
function buyTour
```
- "Change" function (ie. a function that alters contract state)
- Receives a Tour's `id` as parameter
- This fetches a Tour by the `id` parameter and increases its sold amount

```ts
function updateTour
```
- "Change" function (ie. a function that alters contract state)
- Receives a `Tour` object as a parameter, updates Tour and returns the success message

```ts
function deleteTour
```
- "Change" function (ie. a function that alters contract state)
- Receives a Tour's `id` as parameter
- Fetches the Tour by `id`, deletes it together with its comments and rates

```ts
function likeTour
```
- "Change" function (ie. a function that alters contract state)
- Receives a Tour's `id` as parameter
- Fetches the Tour by `id`, and adds a like to it.
- If a like has been added by a user and the function is called again, it removes the like.
- If a dislike has been added by a user and the function is called, it removes the dislike and adds a "like"

```ts
function dislikeTour
```
- "Change" function (ie. a function that alters contract state)
- Receives a Tour's `id` as parameter
- Fetches the Tour by `id`, and adds a dislike to it.
- If a dislike has been added by a user and the function is called again, it removes the dislike.
- If a like has been added by a user and the function is called, it removes the like and adds a dislike

```ts
function commentOnTour
```
- "Change" function (ie. a function that alters contract state)
- Receives a `Comment` object as a parameter, fetches the Tour by the `tourId` value within the `Comment` object
- Creates a new comment and adds it to the Tour

```ts
function rateTour
```
- "Change" function (ie. a function that alters contract state)
- Receives a `Rate` object as a parameter, fetches the Tour by the `tourId` value within the `Rate` object
- Creates a new rate and adds it to the Tour
- The function will not execute if a user has rated before
