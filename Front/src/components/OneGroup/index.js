// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
// import Moment from 'moment';

// == Import
import './oneGroup.scss';

import { pictureUrl, groupsUrl, actuUrl } from 'src/data/urls';
import { createMarkup, stringToUrl, formatDate } from 'src/utils';
import { groups, socialsType } from 'src/data';

// == Composant
/**
 * Component to present a group
 *
 * @param {array} allActu The list of all news
 * @param {function} loadAllActu Get and load all the news
 */
const OneGroup = ({
  allActu,
  loadAllActu,
}) => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    loadAllActu();
  }, []);

  const groupToShow = groups.find((group) => group.id === Number(id));

  function getSocialPicture(socialId) {
    return socialsType.find((soc) => soc.id === socialId).picture;
  }

  function getSocialName(socialId) {
    return socialsType.find((soc) => soc.id === socialId).name;
  }

  const groupActus = allActu.filter((act) => act.musicGroup.id === Number(id));

  return (
    <div id="oneGroup">
      <h1>{groupToShow.name}</h1>
      <div className="oneGroup">
        <div className="picture"><img src={groupToShow.picture} alt={groupToShow.title} /></div>
        <div className="back-link">
          <Link className="back-to-list top" to={groupsUrl}><button type="button">Retour à la liste des Groupes</button></Link>
        </div>
        {groupToShow.bio !== null && (<div className="content" dangerouslySetInnerHTML={createMarkup(groupToShow.bio)} />)}
        <h2 className="mem-intro">Le groupe est composé de :</h2>
        <ul className="members-list">
          {groupToShow.members.map((mem, index) => (
            <li className="member-name" key={index}>{mem}</li>
          ))}
        </ul>
        {groupToShow.socials.length > 0 && (
        <>
          <h2 className="socials-intro">Voici les plateformes où les écouter et les suivres :</h2>
          <ul className="socials-list">
            {groupToShow.socials.map((soc) => (
              <li className="social" key={soc.id}>
                <a href={soc.link} target="_blank" rel="noreferrer noopener"><img src={getSocialPicture(soc.id)} alt={`${getSocialName(soc.id)} de ${groupToShow.name}`} /></a>
              </li>
            ))}
          </ul>
        </>
        )}
        <h2 className="extract-intro">Voici quelques extraits musicaux :</h2>
        <ul className="extracts-list">
          {groupToShow.extract.map((ext) => {
            if (ext.musicType === 1) {
              return (
                <li className="extract" key={ext.id}>
                  <div className="youtube-embed">
                    <iframe width="560" height="315" src={ext.link} title={ext.title} frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    <p><a href={ext.link} target="_blank" rel="noreferrer noopener">{ext.title}</a></p>
                  </div>
                </li>
              );
            }
            if (ext.musicType === 2) {
              return (
                <li className="extract" key={ext.id}>
                  <div className="soundcloud-embed">
                    <iframe width="560" height="166" scrolling="no" title={ext.title} frameBorder="no" allow="autoplay" src={ext.link} />
                    <p><a href={ext.link} target="_blank" rel="noreferrer noopener">{ext.title}</a></p>
                  </div>
                </li>
              );
            }
            return (
              <li className="extract" key={ext.id}>
                <figure className="audio-embed">
                  <audio
                    controls
                    src={ext.link}
                  >
                    <track
                      kind="captions"
                      descriptions={`${ext.title} joué par ${groupToShow.name}`}
                      src={ext.link}
                    />
                    Your browser does not support the
                    <code>audio</code> element.
                  </audio>
                  <figcaption>{ext.title}</figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
        {groupActus.length > 0 && (
        <div className="last-actus">
          <h2 className="actus-intro">Voici les actualités du groupe :</h2>
          <ul className="actus-list">
            {groupActus.map((act) => (
              <li className="actu" key={act.id}>
                <div className="vignette" key={act.id}>
                  <div className="actu-picture"><Link to={`${actuUrl}/${stringToUrl(act.title)}/${act.id}`}><img src={pictureUrl + act.picture} alt={act.title} /></Link></div>
                  <div className="infos">
                    <p className="date">{formatDate(act.date)}</p>
                    <p className="date">{groupToShow.name}</p>
                    <Link to={`${actuUrl}/${stringToUrl(act.title)}/${act.id}`} className="title">{act.title}</Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        )}
      </div>
      <div className="back-link">
        <Link className="back-to-list" to={groupsUrl}><button type="button">Retour à la liste des Groupes</button></Link>
      </div>
    </div>
  );
};

OneGroup.propTypes = {
  /** The list of all news */
  allActu: PropTypes.array.isRequired,
  /** Get and load all the news */
  loadAllActu: PropTypes.func.isRequired,
};

OneGroup.defaultProps = {

};

// == Export
export default OneGroup;
