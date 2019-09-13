import React from 'react';

class Loading extends React.Component{
    render(){
        return (
            <div className="text-center">
                <div className="spinner-border" role="status" id="spinner">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
}
    
export default Loading;