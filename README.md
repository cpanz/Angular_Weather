# Angular Weather

Angular Weather is single page application that fetches daily forecast for the searched city


### Installation

Requires [Node.js](https://nodejs.org/) v4+ to run.

```sh
$ git clone https://github.com/cpanz/Angular_Weather.git
$ cd Angular_Weather
$ npm install
```

### Setting up API key:

Replace "YOUR_API_KEY" in the config.json file in under '/client' directory with your own API key from [openweathermap](openweathermap.org)
```javascript
{
	"API_KEY": "YOUR_API_KEY"
}
```

Start the app by
```sh
$ npm start
```