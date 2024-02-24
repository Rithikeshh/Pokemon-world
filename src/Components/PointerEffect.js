function PointerEffect({positions, effectType}) {
    const arr1 = ['rgb(76 5 25)','rgb(219 39 119)','rgb(162 28 175)','rgb(147 51 234)','rgb(34 211 238)','rgb(110 231 183)']
    const arr2 = ['rgb(15 118 110)','rgb(4 120 87)','rgb(132 204 22)','rgb(234 179 8)','rgb(245 158 11)','rgb(120 113 108)']
    const arr3 = ['rgb(219 39 119)','rgb(202 138 4)','rgb(154 52 18)','rgb(46 16 101)','rgb(199 210 254)','rgb(4 47 46)']

    let arr;
    effectType == 1 ? arr = arr1 : arr = arr2;
    if(effectType == 3) arr = arr3;
  return (
    <div >
      {arr.map((item,index)=>(
      <div key={index} 
        style={{
          position: "absolute",
          backgroundColor: item,
          borderRadius: "50%",
          transform: `translate(${positions['pos'+(index+1)].x}px, ${positions['pos'+(index+1)].y + ((index*10)+4)}px)`,
          left: -10,
          top: -10,
          width: 10-index,
          height: 10-index,
          zIndex: 2
        }}
      />
      ))}
    </div>
  )
}

export default PointerEffect
