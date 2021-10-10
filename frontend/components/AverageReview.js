import StarIcon from '@material-ui/icons/Star'
import StarOutlineIcon from '@material-ui/icons/StarOutline'
import StarHalfIcon from '@material-ui/icons/StarHalf'

export default function AverageReview({ value }) {
	return (
		<div>
			{value >= 1 ? (
				<StarIcon />
			) : value >= 0.5 ? (
				<StarHalfIcon />
			) : (
				<StarOutlineIcon />
			)}

			{value >= 2 ? (
				<StarIcon />
			) : value >= 1.5 ? (
				<StarHalfIcon />
			) : (
				<StarOutlineIcon />
			)}

			{value >= 3 ? (
				<StarIcon />
			) : value >= 2.5 ? (
				<StarHalfIcon />
			) : (
				<StarOutlineIcon />
			)}

			{value >= 4 ? (
				<StarIcon />
			) : value >= 3.5 ? (
				<StarHalfIcon />
			) : (
				<StarOutlineIcon />
			)}

			{value >= 5 ? (
				<StarIcon />
			) : value >= 4.5 ? (
				<StarHalfIcon />
			) : (
				<StarOutlineIcon />
			)}
		</div>
	)
}