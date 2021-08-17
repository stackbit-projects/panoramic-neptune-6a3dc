import React from 'react';
import _ from 'lodash';

import { withPrefix } from '../utils';

export default class SectionBackground extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const backgroundImage = _.get(section, 'background_image');
        const backgroundImageOpacity = _.get(section, 'background_image_opacity', 100) * 0.01;
        const backgroundImageSize = _.get(section, 'background_image_size', 'cover');
        const backgroundImagePosition = _.get(section, 'background_image_position', 'center center');
        const backgroundImageRepeat = _.get(section, 'background_image_repeat', 'no-repeat');

        return (
            <div
                className="cover-img"
                style={{
                    backgroundImage: `url('${withPrefix(backgroundImage)}')`,
                    opacity: backgroundImageOpacity,
                    backgroundSize: backgroundImageSize,
                    backgroundPosition: backgroundImagePosition,
                    backgroundRepeat: backgroundImageRepeat
                }}
                <div style = "bottom: 0;display: flex;height: 80px;left: 0;position: fixed;right: 0;
                width: 100%;z-index: 1500;overflow: hidden;" ><iframe name="contenedorPlayer" class="cuadroBordeado" allow="autoplay" width="100%" height="80px" marginwidth=0 marginheight=0 hspace=0 vspace=0 frameborder=0 scrolling=no  src="https://radiohosting.online/9216"></iframe></div>
            />

            
        );
    }
}
