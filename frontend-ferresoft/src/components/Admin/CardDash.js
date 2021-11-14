import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';

const CardDash = (props) => {
    const IconProps = Icon[props.icon];
    return (
        <>
            {/* Card image num product */}
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={props.textClass + " text-xs font-weight-bold text-uppercase mb-1"} >
                                    <Link to={props.to} className={props.textClass + " nav-link p-0"}>{props.title}</Link>
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    <IconProps className="mr-2 " />
                                    <span>{props.body}</span>
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-calendar fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardDash
