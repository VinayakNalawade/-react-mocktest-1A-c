import {AiOutlineDelete} from 'react-icons/ai'

import {
  TrackContainer,
  TrackImg,
  TrackNames,
  TrackTitle,
  TrackSinger,
  TrackTime,
  DeleteButton,
} from './styledComponents'

const Track = props => {
  const {deleteTrack, track} = props

  const onDelete = () => deleteTrack(track.id)

  return (
    <TrackContainer>
      <TrackImg alt="track" src={track.imageUrl} />
      <TrackNames>
        <TrackTitle>{track.name}</TrackTitle>
        <TrackSinger>{track.genre}</TrackSinger>
      </TrackNames>
      <TrackTime>{track.duration}</TrackTime>
      <DeleteButton data-testid="delete" type="button" onClick={onDelete}>
        <AiOutlineDelete color="#ffffff" size="22" />
      </DeleteButton>
    </TrackContainer>
  )
}

export default Track
