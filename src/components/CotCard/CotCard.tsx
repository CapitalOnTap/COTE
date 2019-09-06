import PropTypes from 'prop-types';
import React from 'react';

interface Props {
  cardHolderName: string;
  id: string;
}

const CotCard: React.SFC<Props & any> = ({ cardHolderName, id, ...props }) => {
  return (
    <div {...props} id={id}>
      <svg viewBox="0 0 320 204" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
        <path fill="#E5E5E5" d="M0 0h320v204H0z" />
        <path
          d="M308.807 204H10.798C4.872 204 0 199.067 0 193.067V10.933C0 4.933 4.872 0 10.798 0h298.009c5.926 0 10.798 4.933 10.798 10.933V193.2c-.132 5.867-4.872 10.8-10.798 10.8z"
          fill="#000"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.498 105.467V76c0-4.4 3.424-7.867 7.638-7.867H70.32c4.214 0 7.638 3.6 7.638 7.867v29.467c0 4.4-3.424 7.866-7.638 7.866H37.136c-4.214 0-7.638-3.466-7.638-7.866z"
          fill="#9D691E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M62.683 82.133v8h14.75v-9.066H63.604c-.527 0-.922.4-.922 1.066z"
          fill="#CAA56C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M61.63 71.2l-2.766 2.933-.527-.533 2.766-2.933v-2h-14.88v1.866l7.505 7.734 3.424-3.6.527.533-3.556 3.6v3.067h-8.56V98.8h16.462V82.133c0-.933.79-1.733 1.58-1.733H77.3v-4c0-2-.79-3.733-1.975-5.2H61.63z"
          fill="#CAA56C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M61.893 70.533h12.905a7.177 7.177 0 0 0-4.872-1.866h-8.033v1.866zM44.905 90.267V82c0-.533-.395-.933-.921-.933H30.156v9.2h14.75zm0 8.533v-7.867H30.156v8.8h13.696c.527.134 1.053-.4 1.053-.933zm16.461 11.333l-7.638-7.6-7.506 7.6v2.533h15.144v-2.533zM62.683 90.8v8c0 .533.395.933.922.933H77.3v-9.066H62.683v.133zm-17.119 19.6h-13.3a7.315 7.315 0 0 0 5.399 2.4h7.9v-2.4zm16.461 0v2.4h7.9c2.108 0 3.952-.933 5.4-2.4h-13.3zm1.58-9.867c-.527 0-1.054-.266-1.449-.8h-8.164V102l7.77 7.733h14.09c.922-1.333 1.58-2.933 1.58-4.666v-4.534H63.605z"
          fill="#CAA56C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M45.696 109.733L53.333 102v-2.267H45.3c-.263.534-.79.8-1.448.8H30.156v4.534c0 1.733.527 3.333 1.58 4.666h13.96zm-.132-39.2v-1.866h-7.901a7.178 7.178 0 0 0-4.873 1.866h12.774zM43.852 80.4c.658 0 1.185.4 1.448.933h8.033v-2.266l-7.506-7.734H32.132a7.917 7.917 0 0 0-1.976 5.2v4h13.696V80.4z"
          fill="#CAA56C"
        />
        <path
          d="M286.025 90.667c0 5.066-1.185 9.466-3.424 13.6-.132.133-.263.4-.395.533-.395.533-1.185.8-1.712.4-.658-.4-1.053-1.2-.658-1.867.395-.933.921-1.866 1.316-2.8.922-2.266 1.58-4.666 1.844-7.2.527-4.933-.263-9.733-2.634-14.266-.131-.4-.395-.8-.526-1.2-.264-.667 0-1.467.658-1.734a1.665 1.665 0 0 1 1.975.534c1.054 1.866 1.844 3.733 2.502 5.866.527 1.6.79 3.2 1.054 4.8-.132 1.2 0 2.4 0 3.334z"
          fill="#fff"
        />
        <path
          d="M279.836 90.667c-.132 3.6-.922 6.933-2.502 10.133l-.79 1.2c-.396.4-.922.667-1.45.4-.526-.267-.92-.667-.92-1.333 0-.267 0-.534.13-.667.396-.933.923-2 1.318-2.933.921-2.4 1.317-4.934 1.185-7.6-.132-2.8-.922-5.467-2.239-8-.132-.267-.263-.667-.395-1.067-.395-.933.395-1.733 1.185-1.733.659 0 1.185.266 1.449.8 1.317 2.266 2.239 4.8 2.634 7.333.263 1.2.395 2.133.395 3.467zm-6.322.133c0 2.8-.658 5.333-1.975 7.6-.132.267-.263.4-.395.667-.395.533-.922.666-1.448.4-.527-.134-.922-.667-1.054-1.2 0-.267 0-.534.132-.8.263-.667.658-1.467.921-2.134.659-1.733 1.054-3.466.922-5.333-.131-1.6-.526-3.2-1.185-4.667-.263-.533-.527-.933-.658-1.466-.264-.8-.132-1.2.658-1.734.395-.266 1.317-.266 1.712.134.263.266.527.666.79 1.066.922 1.734 1.58 3.467 1.712 5.467-.263.667-.132 1.333-.132 2zm-5.925-.133c0 1.733-.527 3.466-1.449 4.933l-.79.8c-.527.4-1.053.267-1.448 0-.527-.4-.79-1.067-.659-1.6.132-.267.264-.667.395-.933.659-1.067.922-2.134.922-3.334 0-1.2-.263-2.266-.922-3.2-.131-.266-.263-.4-.395-.666-.263-.667-.132-1.334.527-1.734.527-.4 1.317-.4 1.712.134.79.8 1.185 1.733 1.58 2.8.395.933.527 1.866.527 2.8z"
          fill="#fff"
        />
        <path d="M283.654 143.733H265.48V176.8h18.173v-33.067z" fill="#EA5B0C" />
        <path
          d="M266.667 160.267c0-6.667 3.16-12.667 7.901-16.534-3.555-2.8-8.033-4.533-12.773-4.533-11.457 0-20.807 9.467-20.807 21.067s9.35 21.066 20.807 21.066a20.18 20.18 0 0 0 12.773-4.533c-4.74-3.867-7.901-9.867-7.901-16.533z"
          fill="#DE0716"
        />
        <path
          d="M306.173 173.2v-.667h.263v-.133h-.658v.133h.263v.667h.132zm1.317 0v-.8h-.263l-.264.533-.263-.533h-.264v.8h.132v-.667l.264.534h.131l.264-.534v.667h.263z"
          fill="#fff"
        />
        <path
          d="M308.148 160.267c0 11.6-9.35 21.066-20.806 21.066-4.873 0-9.35-1.733-12.774-4.533 4.872-3.867 7.901-9.867 7.901-16.533 0-6.667-3.16-12.667-7.901-16.534 3.556-2.8 8.033-4.533 12.774-4.533 11.588 0 20.806 9.333 20.806 21.067z"
          fill="#F59E00"
        />
        <path
          d="M253.234 191.733v-3.466c0-1.334-.79-2.267-2.107-2.267-.658 0-1.448.267-1.975.933-.395-.666-.922-.933-1.844-.933-.526 0-1.185.133-1.58.8v-.667h-1.185v5.6h1.185v-3.066c0-.934.527-1.467 1.317-1.467.79 0 1.185.533 1.185 1.467v3.066h1.185v-3.066c0-.934.527-1.467 1.317-1.467.79 0 1.185.533 1.185 1.467v3.066h1.317zm17.91-5.466h-1.976v-1.734h-1.185v1.734h-1.053v1.066h1.053v2.534c0 1.333.527 2.133 1.976 2.133.526 0 1.053-.133 1.448-.4l-.395-1.067c-.395.267-.79.267-1.053.267-.659 0-.79-.4-.79-.933v-2.534h1.975v-1.066zm10.271-.134c-.658 0-1.185.267-1.448.8v-.666h-1.185v5.6h1.185V188.8c0-.933.395-1.467 1.185-1.467.263 0 .527 0 .79.134l.395-1.2c-.395-.134-.658-.134-.922-.134zm-15.539.534c-.526-.4-1.317-.534-2.238-.534-1.449 0-2.239.667-2.239 1.734 0 .933.658 1.466 1.844 1.6l.526.133c.659.133.922.267.922.533 0 .4-.395.667-1.317.667-.79 0-1.448-.267-1.843-.533l-.527.933c.658.533 1.448.667 2.37.667 1.58 0 2.502-.8 2.502-1.867 0-.933-.79-1.467-1.975-1.733l-.527-.134c-.527-.133-.922-.133-.922-.533s.395-.667 1.054-.667c.658 0 1.448.267 1.712.534l.658-.8zm32.132-.534c-.658 0-1.185.267-1.449.8v-.666h-1.185v5.6h1.185V188.8c0-.933.395-1.467 1.186-1.467.263 0 .526 0 .79.134l.395-1.2c-.264-.134-.659-.134-.922-.134zm-15.407 2.934c0 1.733 1.185 2.933 2.897 2.933.79 0 1.448-.133 1.975-.667l-.527-.933c-.395.267-.922.533-1.448.533-.922 0-1.712-.666-1.712-1.733 0-1.067.658-1.733 1.712-1.733.527 0 1.053.133 1.448.533l.527-.933c-.658-.534-1.185-.667-1.975-.667-1.712-.267-2.897.933-2.897 2.667zm11.193 0v-2.8h-1.185v.666c-.395-.533-.922-.8-1.712-.8-1.58 0-2.766 1.2-2.766 2.934 0 1.733 1.186 2.933 2.766 2.933.79 0 1.317-.267 1.712-.8v.667h1.185v-2.8zm-4.477 0c0-.934.658-1.734 1.712-1.734 1.053 0 1.711.8 1.711 1.734 0 1.066-.658 1.733-1.711 1.733-1.054 0-1.712-.8-1.712-1.733zm-14.486-2.934c-1.58 0-2.765 1.2-2.765 2.934 0 1.733 1.185 2.933 2.765 2.933.79 0 1.58-.267 2.239-.8l-.527-.933a2.51 2.51 0 0 1-1.58.533c-.79 0-1.449-.4-1.712-1.333h4.082v-.534c.132-1.6-.922-2.8-2.502-2.8zm0 1.067c.79 0 1.317.533 1.449 1.333h-2.897c.131-.8.658-1.333 1.448-1.333zm30.156 1.867V184h-1.185v2.933c-.395-.533-.922-.8-1.712-.8-1.58 0-2.765 1.2-2.765 2.934 0 1.733 1.185 2.933 2.765 2.933.79 0 1.317-.267 1.712-.8v.667h1.185v-2.8zm-4.477 0c0-.934.658-1.734 1.712-1.734 1.053 0 1.712.8 1.712 1.734 0 1.066-.659 1.733-1.712 1.733s-1.712-.8-1.712-1.733zm-40.56 0v-2.8h-1.185v.666c-.395-.533-.922-.8-1.712-.8-1.58 0-2.765 1.2-2.765 2.934 0 1.733 1.185 2.933 2.765 2.933.79 0 1.317-.267 1.712-.8v.667h1.185v-2.8zm-4.477 0c0-.934.658-1.734 1.712-1.734 1.053 0 1.712.8 1.712 1.734 0 1.066-.659 1.733-1.712 1.733-1.054 0-1.712-.8-1.712-1.733zm51.49 1.866h.263c.132 0 .132.134.132.134l.131.133v.533c0 .134-.131.134-.131.134l-.132.133h-.527c-.131 0-.131-.133-.131-.133l-.132-.134v-.533c0-.133.132-.133.132-.133l.131-.134c.132.134.132 0 .264 0zm0 1.067h.131s.132 0 .132-.133l.132-.134v-.266s0-.134-.132-.134l-.132-.133h-.263s-.132 0-.132.133l-.131.134v.266s0 .134.131.134l.132.133h.132zm0-.667h.131v.267h-.131l.131.133h-.131l-.132-.133v.133h-.132v-.533h.264v.133zm-.132 0v.134h.263c0-.134-.131-.134-.263-.134z"
          fill="#fff"
        />
        <path transform="translate(70.023 11.518)" fill="url(#pattern0)" d="M0 0h179.2v181.44H0z" />
        <path
          d="M159.737 158.4c30.764 0 55.703-25.251 55.703-56.4 0-31.149-24.939-56.4-55.703-56.4-30.765 0-55.704 25.251-55.704 56.4 0 31.149 24.94 56.4 55.704 56.4z"
          fill="#020203"
        />
        <path
          d="M208.592 73.733l-1.185.667c4.741 8.4 7.243 18 7.243 27.6 0 30.667-24.626 55.6-54.914 55.6s-54.913-24.933-54.913-55.6c0-9.733 2.502-19.2 7.243-27.6l-1.186-.667C106.008 82.267 103.506 92 103.506 102c0 31.467 25.284 56.933 56.23 56.933 31.079 0 56.231-25.6 56.231-56.933.132-10-2.502-19.733-7.375-28.267z"
          fill="#DAA621"
        />
        <path
          d="M159.078 46.4v87.733h1.317V46.4c12.247.133 24.362 4.533 33.844 12.4l.79-1.067C185.02 49.6 172.51 45.067 159.605 45.067c-12.774 0-25.416 4.533-35.424 12.666l.79 1.067c9.877-7.867 21.86-12.267 34.107-12.4zM33.844 16.133c-1.449-1.2-3.424-1.866-5.4-1.866-1.975 0-3.818.666-5.399 1.866l-.395-.533c1.58-1.333 3.687-2 5.794-2 2.107 0 4.083.667 5.795 2l-.395.533z"
          fill="#DAA621"
        />
        <path
          d="M23.045 16.533l-.79-.933.263-.267C24.23 14 26.338 13.2 28.444 13.2c2.107 0 4.346.8 5.926 2.133l.264.267-.79.933-.264-.266a8.119 8.119 0 0 0-5.136-1.867 8.119 8.119 0 0 0-5.135 1.867l-.264.266zm5.399 15.6c-5.004 0-9.218-4.133-9.218-9.333 0-1.6.395-3.2 1.185-4.533l.527.266a8.35 8.35 0 0 0-1.185 4.267c0 4.8 3.819 8.667 8.56 8.667 4.74 0 8.56-3.867 8.56-8.667a8.35 8.35 0 0 0-1.186-4.267l.527-.266c.79 1.333 1.185 2.933 1.185 4.666.263 5.067-3.95 9.2-8.955 9.2z"
          fill="#DAA621"
        />
        <path
          d="M28.444 32.4c-5.267 0-9.481-4.267-9.481-9.6 0-1.733.395-3.333 1.185-4.8l.132-.267 1.053.667v.267A8.746 8.746 0 0 0 20.28 22.8c0 4.533 3.687 8.267 8.164 8.267 4.478 0 8.165-3.734 8.165-8.267a8.746 8.746 0 0 0-1.053-4.133l-.132-.267 1.053-.667.132.267c.79 1.467 1.317 3.067 1.317 4.8 0 5.333-4.214 9.6-9.482 9.6z"
          fill="#DAA621"
        />
        <path d="M29.181 13.867h-1v13.2h1v-13.2z" fill="#DAA621" />
        <path
          d="M29.103 13.6h-1.317v13.867h1.317V13.6zm18.699 11.333s.132 0 .132.134l.395.533a2.05 2.05 0 0 1-1.053.8 4.857 4.857 0 0 1-1.58.267c-.527 0-1.054-.134-1.45-.267a2.05 2.05 0 0 1-1.053-.8c-.263-.4-.526-.8-.658-1.2-.263-.4-.395-.933-.395-1.6 0-.533.132-1.067.263-1.6.132-.533.395-.933.79-1.2.264-.4.659-.533 1.186-.8.395-.133.921-.267 1.448-.267.527 0 1.054.134 1.449.267s.79.4 1.053.667l-.395.533s0 .133-.132.133h-.131s-.132 0-.264-.133c-.131 0-.263-.133-.395-.267-.131-.133-.263-.133-.526-.266-.132.133-.395.133-.659.133-.395 0-.658 0-1.053.133-.264.134-.527.267-.79.534-.264.266-.396.533-.527.933-.132.4-.132.8-.132 1.2 0 .4 0 .8.132 1.2.131.4.263.667.527.933.263.267.526.4.79.534.263.133.658.133.921.133h.527c.132 0 .264 0 .527-.133.132 0 .263-.134.395-.134.132-.133.263-.133.395-.266.132 0 .132 0 .263-.134 0 0-.131.134 0 0zm7.77 1.6h-.79c-.132 0-.132 0-.263-.133l-.132-.133-.659-1.734h-3.292l-.658 1.734-.132.133s-.132.133-.263.133h-.79l2.897-7.466h1.185l2.897 7.466zm-2.107-2.666l-1.053-2.934c-.132-.133-.132-.4-.264-.8 0 .134-.132.267-.132.4 0 .134-.131.267-.131.4l-1.054 2.934h2.634zm5.267-4.667c.527 0 .922 0 1.186.133.395.134.658.267.921.534.264.266.396.4.527.8.132.266.132.666.132.933 0 .4 0 .667-.132.933-.131.267-.263.534-.527.8-.263.267-.526.4-.921.534-.395.133-.79.133-1.186.133h-1.185v2.8h-1.053v-7.467h2.238V19.2zm0 3.733c.264 0 .527 0 .79-.133.264-.133.396-.133.527-.267.132-.133.264-.266.264-.533.131-.133.131-.4.131-.667 0-.4-.131-.8-.395-1.066-.263-.267-.658-.4-1.317-.4h-1.185V22.8h1.185v.133zm5.005 3.6h-1.054v-7.466h1.054v7.466zM70.584 20h-2.37v6.533H67.16V20h-2.37v-.933h5.794V20zm6.453 6.533h-.79c-.132 0-.132 0-.263-.133l-.132-.133-.659-1.734h-3.292l-.658 1.734-.132.133s-.132.133-.263.133h-.79l2.897-7.466h1.053l3.029 7.466zm-2.107-2.666l-1.185-2.934c-.132-.133-.132-.4-.264-.8 0 .134-.131.267-.131.4 0 .134-.132.267-.132.4l-1.053 2.934h2.765zm7.243 1.733v.933h-4.214v-7.466h1.053V25.6h3.16z"
          fill="#DAA621"
        />
        <text
          font-family="Lato-Regular, Lato"
          font-size="16"
          font-weight="normal"
          line-spacing="32"
          fill="#FFF"
        >
          <tspan x="32" y="180">
            {cardHolderName}
          </tspan>
        </text>
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
            <use xlinkHref="#image0" transform="scale(.00175)" />
          </pattern>
        </defs>
      </svg>
    </div>
  );
};

CotCard.propTypes = { cardHolderName: PropTypes.string };

CotCard.defaultProps = { cardHolderName: '' };

export default CotCard;
