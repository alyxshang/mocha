# MOCHA :coffee: :doughnut:

***A charming and minimalist URL-shortening service. :coffee: :doughnut:***

## ABOUT :books:

This repository contains the source code for ***Mocha***. ***Mocha*** is a url-shortening service. The frontend is written in Typescript using [React](https://react.dev) and [Deno](https://deno.land). The backend is an API service written in Rust using [Actix Web](https://actix.rs/) and [SQLx](https://github.com/launchbadge/sqlx).

## STATUS :warning:

***THIS PROJECT IS STILL SOMEWHAT WORK IN PROGRESS.***

- [ ] Make a logo.
- [ ] Deploy somewhere.
- [ ] Unit tests for both backend and frontend.

## DOCUMENTATION :book:

### SCREENSHOTS

- **Fig. 1**: Save a link.
<p align="center">
 <img alt="The home page where links can be saved." src="screenshots/save_link.png"/>
</p>

- **Fig. 2**: Retrieve the saved link by the links's ID.
<p align="center">
 <img alt="The page displaying information about a saved link." src="screenshots/link.png"/>
</p>

### Usage

***Mocha*** allows you to save links in a database and then retrieve information about the saved link through a link ending in the link's ID. As illustrated in **Fig 1**, there are two fields: i) the "Name" field and ii) the "Link URL" field. The "Name" field allows you to name the link you want to save in a unique and distinct way. The "Link URL" field is the field expecting the link's URL. To save the link together with the link's name, you click the "Submit" button. If saving the link is successful, a text field will appear featuring the ID of the link. If you append this ID to the main URL of the address that ***Mocha*** is online at, you will get a page featuring the link and more information on it, as illustrated on **Fig. 2**. If you click the "Visit Link" button, you will be taken to the page the URL of the link points to.

### API Routes

***Mocha*** offers the following API routes:

- `/submit`: This route accepts a `POST` request with a JSON payload of the following structure (The response will be in JSON format and feature all information on the saved link.):

```JSON
{
    "name": "Alyx's Website",
    "time": "2024/11/28/11:11:45",
    "link": "https://alyxshang.boo/"
}
```

- `/retrieve/id`: This route accepts a `GET` request where the final part of the path, `id`, is the ID of the link to be retrieved. The response will be in JSON format and feature all information on the saved link.

### Running Mocha locally

To run this project locally on your own device, please make sure you have Docker and Git installed. Follow the steps outlined below to run ***Mocha***:

- 1.) Clone this repository by running the following command from a terminal session: `git clone https://github.com/alyxshang/mocha`.
- 2.) Change directory into Mocha's root directory.
- 3.) Run the command `docker-compose build`.
- 4.) Run the command `docker-compose up`.
- 5.) Mocha's frontend should be now running on [`http://localhost:4000`](http://localhost:4000).
- 6.) Mocha's backend should be now running on [`http://localhost:3000`](http://localhost:3000).

## NOTE :scroll:

- *Mocha :coffee: :doughnut:* by *Alyx Shang :black_heart:*.
- Licensed under the [FSL v1](https://github.com/alyxshang/fair-software-license).
