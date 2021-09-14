import classes from './Input.module.css'

const Input = (props) => {
  return (
    <div>
      <div className={classes.control}>
        <input
          placeholder={props.label}
          type={props.type}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  )
}

export default Input
