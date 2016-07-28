

 import React from "react";

 export default
 class ActionButton extends React.Component {
     glyphMap = {
        add: 'plus',
        remove: 'remove',
        added: 'ok'
     };

     constructor() {
         super();
     }

     render() {
         return (
             <span class={"action-button hint--bottom " + (!this.props.visible ? 'hidden' : '')} aria-label={this.props.actionHint}>
                 <span class={`glyphicon glyphicon-${this.glyphMap[this.props.actionGlyph]}`} aria-hidden="true" onClick={this.props.handleClick}></span>
             </span>
         );
     }
 }
