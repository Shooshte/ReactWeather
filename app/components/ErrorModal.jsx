let React = require('react');

let ErrorModal = React.createClass({
  componentDidMount: function() {
    let modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal>
        <h4>Title</h4>
        <p>Error message!</p>
        <p>
          <button className="button hollow" data-close>
            Okay
          </button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal
