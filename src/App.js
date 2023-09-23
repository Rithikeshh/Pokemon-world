import React, { useEffect , useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header.js';
import Modal from './Components/Modal.js';
import Main from './Components/MainSection.js';
import Footer from './Components/Footer.js';

export default function App() {
        const [loading, setLoading] = useState(true);
        const [pokemonList, setPokemonList] = useState([]);
        const [nextPokemonUrl, setNextPokemonUrl] = useState(null);
        const [showModal, setShowModal] = useState(false);
        const [selectedPokemon, setSelectedPokemon] = useState(null);
        async function getAllPokemonData(url ='https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1'){
                
                let response = await axios.get(url)
                let allPokemonData = response.data[0].results
                setNextPokemonUrl(response.data[0].next);
                let pokemonListFromApi = [];
                for(let pokemon of allPokemonData){
                        let response = await axios.get(pokemon.url)
                        let pokemonData = response.data[0]
                        pokemonListFromApi.push(pokemonData)
                }
                setPokemonList(oldArray=>{
                        return [...oldArray,...pokemonListFromApi]
                })
                setLoading(false);

        }
        useEffect(()=>{
                getAllPokemonData();
        },[])
        function handleShowMore(){
                getAllPokemonData(nextPokemonUrl)
        }
        function handleModel(){
                setShowModal(!showModal)
        }
        function handleSelectedPokemon(index){
                setSelectedPokemon(index)
        }
        
    return( loading ? <div>Loading</div> :
        <div id="parent" >
                <Header/>
                {showModal && <Modal pokemon={pokemonList[selectedPokemon]} handleModel={handleModel}/>}
                <Main pokemonList={pokemonList} handleModel={handleModel} handleSelectedPokemon={handleSelectedPokemon}/>
                <Footer handleShowMore={handleShowMore}/>
        </div>
    )
    
  }
  
