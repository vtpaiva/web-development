import './Box.css'

function SubBox(props) {
    return (
        <div className='defaultSubBox'>
            {props.children}
        </div>
    )
}

function Box(props) {
    return (
        <div className='defaultBox'>
            <fieldset style={{'display' : props.display ? props.display : 'flex'}}>
                <legend>{props.name}</legend>
                {props.children}
            </fieldset>
        </div>
    )
}

export {Box, SubBox}