

export default function MiniCard() {
  return (
        <div className='card w-[80px] h-[60px] mx-auto mb-10'>
            <div className='topCard w-100 h-[80px] rounded flex justify-center items-center'>
              <div className='bg-center bg-cover'>
                <img className="mx-auto w-[130px] h-full max-w-none pixelated" src="https://github.com/PokeAPI/sprites/blob/ca5a7886c10753144e6fae3b69d45a4d42a449b4/sprites/pokemon/1.png?raw=true" />
              </div>
            </div>
          </div>
  )
}
