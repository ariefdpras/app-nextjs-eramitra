export default function Section( { children, element_id, background, icon, height }) {
  return (
    <div className={element_id} >
      {
          icon && icon.length > 0 && icon.map((shape, id) => (
            <>
            <img key={id} className={`icon-shape-${id}  ${shape.vertical ? shape.vertical : ''} ${shape.horizontal ? shape.horizontal : ''}`} src={`/static/images/${shape.image}`} />
            <style>
            {`
              .${element_id} .icon-shape-${id} {
                position: absolute;
                z-index: -1;
              }

              .${element_id} .icon-shape-${id}.top {
                top: 0;
              }

              .${element_id} .icon-shape-${id}.bottom {
                bottom: 0;
              }

              .${element_id} .icon-shape-${id}.right {
                right: 0;
              }

              .${element_id} .icon-shape-${id}.left {
                left: 0;
              }
          `}
            </style>
            </>)
          )
        }
        {children}
        <div className="background"></div>
      <style>
        {`
          .${element_id} {
            width: 100%;
            position: relative;
            height: ${height};
          }

          .${element_id} .background {
            background: ${background};
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: -2;
          }

        `}
      </style>
    </div>
  );
}

