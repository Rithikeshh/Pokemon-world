import React, { useEffect , useMemo, useReducer, useRef, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header.js';
import Modal from './Components/Modal.js';
import Main from './Components/MainSection.js';
import Footer from './Components/Footer.js';
import PointerEffect from './Components/PointerEffect';
import reducer,{initialValue} from './Components/Reducer';



export default function App() {
        const timer = useRef(0)
        const [state, dispatch] = useReducer(reducer, initialValue)
        const [showPointerEffect, setShowPointerEffect] = useState(0);
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
                window.addEventListener('scroll',handleScroll)
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
        // Practice random things(effect on pointer move)
        function handlePointerEffect(e){
                dispatch({type: 'pos1', payload : {e: e, scrollY : window.scrollY}})
                setTimeout(()=>{
                        dispatch({type: 'pos2', payload : {e: e, scrollY : window.scrollY}})
                },30)
                setTimeout(()=>{
                        dispatch({type: 'pos3', payload : {e: e, scrollY : window.scrollY}})
                },60)
                setTimeout(()=>{
                        dispatch({type: 'pos4', payload : {e: e, scrollY : window.scrollY}})
                },90)
                setTimeout(()=>{
                        dispatch({type: 'pos5', payload : {e: e, scrollY : window.scrollY}})
                },120)
                setTimeout(()=>{
                        dispatch({type: 'pos6', payload : {e: e, scrollY : window.scrollY}})
                },150)
                if(showPointerEffect == 2){ 
                        clearTimeout(timer.current)
                        timer.current = setTimeout(()=>dispatch({type: 'reset'}),150)
                }
                showPointerEffect == 3 && setTimeout(()=>dispatch({type: 'reset'}),300)
        }
        function toggleMouseEffect(){
                setShowPointerEffect((oldValue)=>{
                        if (oldValue === 3 ){
                                return 0;
                        }
                        return oldValue+1
                })
        }
        // handle pointer effect after scroll
        function handleScroll(e){
                // console.log(window.scrollY)
                
        }
        const memorizedHeader = useMemo(()=>{
                return <Header effectType={showPointerEffect} toggleMouseEffect={toggleMouseEffect}/>
        },[showPointerEffect])
        const memorizedModal = useMemo(()=>{
                return <Modal pokemon={pokemonList[selectedPokemon]} handleModel={handleModel}/>
        },[selectedPokemon, showModal])
        const memorizedMain = useMemo(()=>{
                return <Main pokemonList={pokemonList} handleModel={handleModel} handleSelectedPokemon={handleSelectedPokemon}/>
        },[pokemonList])
        const memorizedFooter = useMemo(()=>{
                return <Footer handleShowMore={handleShowMore}/>
        },[nextPokemonUrl])

    return( loading ? <div>Loading</div> :
        <div id="parent"
                onMouseMove={(e)=>{
                        handlePointerEffect(e)
                }}
                onMouseLeave={(e)=>{
                        showPointerEffect == 1 && setTimeout(()=>dispatch({type: 'reset'}),160)
                }}
        >
                {showPointerEffect && <PointerEffect effectType={showPointerEffect} positions={state}/>}
                {memorizedHeader}
                {showModal && memorizedModal}
                {memorizedMain}
                {memorizedFooter}
        </div>
    )
    
  }
  
