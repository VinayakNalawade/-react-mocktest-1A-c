import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-color: #152850;
  display: flex;
  flex-direction: column;
`
export const TopSection = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 35vh;
  padding: 5%;
  padding-bottom: 2%;
`
export const TopHeading = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
`

export const TopPara = styled.p`
  font-size: 22px;
  color: #cbd5e1;
`

export const BottomSection = styled.div`
  padding-left: 3%;
  padding-right: 3%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

export const PlaylistInput = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2%;
  margin-bottom: 2%;
`

export const PlaylistHeading = styled.h1`
  font-size: 22px;
  color: #ffffff;
  margin: 0;
`

export const InputContainer = styled.div`
  border: 1px solid #cbd5e1;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 10px;
`
export const Input = styled.input`
  outline: none;
  width: 200px;
  flex-grow: 1;
  border: none;
  font-size: 15px;
  color: #ffffff;
  background-color: transparent;
`
export const Playlist = styled.ul`
  padding: 0;
  overflow: auto;
  height: 50vh;
`

export const NoSongs = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`
export const NoSongsHeading = styled.p`
  font-size: 28px;
  color: #ffffff;
  font-weight: 600;
`
