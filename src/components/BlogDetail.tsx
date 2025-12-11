import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/blogDetail.css";

import kinematics1 from "../assets/blogs/phy/Displacement–Time Graph.png";
import kinematics2 from "../assets/blogs/phy/Velocity–Time Graph.png";
import kinematics3 from "../assets/blogs/phy/Velocity vs Time graph.png";
import projectileImg1 from "../assets/blogs/phy/p1.png";
import projectileImg2 from "../assets/blogs/phy/p2.png";
import ForceAcceleration1 from "../assets/blogs/phy/Force vs Accelerationf.png";
import ForceAcceleration2 from "../assets/blogs/phy/Newton's Third Law.png";
import work1 from "../assets/blogs/phy/Work-Energy Graph.png";
import work2 from "../assets/blogs/phy/Power-Time Graph.png";
import Momentum1 from "../assets/blogs/phy/Momentum vs. Time.png";
import Momentum2 from "../assets/blogs/phy/Elastic and Inelastic Collisions.png";
import Gravitation1 from "../assets/blogs/phy/Gravitation.png";
import CircularMotion1 from "../assets/blogs/phy/Circular Motion Diagram.png";
import sound1 from "../assets/blogs/phy/Circular Motion Diagram.png";
import sound2 from "../assets/blogs/phy/Musical Instrument Waves.png";
import SHM from "../assets/blogs/phy/simple harmonic motion.png";
import ReflectionLight from "../assets/blogs/phy/ReflectionLight.png";
import Refractionlight from "../assets/blogs/phy/Refractionlight.png";
import Thomson from "../assets/blogs/phy/Thomson Plum.png";
import Rutherford from "../assets/blogs/phy/Rutherford.png";
import Bohr from "../assets/blogs/phy/BohrModel.png";
import Quantum from "../assets/blogs/phy/Quantum Mechanical Model.png";
import Atomic from "../assets/blogs/phy/Atomic Spectra.png";
import humanrespiratorysystem from "../assets/blogs/bio/humanrespiratorysystem.jpg";
import HumanDigestiveSystem from "../assets/blogs/bio/Human Digestive System.jpg";
import Cell from "../assets/blogs/bio/Cell.png";

interface Subtopic {
  id: string;
  title: string;
  content: string;
}

interface Blog {
  title: string;
  subtopics: Subtopic[];
}

const BlogDetail: React.FC = () => {
  const { subject } = useParams<{ subject: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [activeSubtopic, setActiveSubtopic] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  // Enhanced blog data with better content structure
  const blogsData: Record<string, Blog> = {
    physics: {
      title: "Physics",
      subtopics: [
        {
          id: "kinematics-theory",
          title: "Kinematics Theory",
          content: `
    <div class="content-section">
      <h2>📘 Introduction to Kinematics</h2>
      <p><strong>Kinematics</strong> is the branch of physics that deals with the <em>description of motion</em> without considering the forces that cause it. 
      It tells us <strong>how</strong> an object moves — its displacement, speed, velocity, and acceleration — but not <strong>why</strong> it moves.</p>

      <p>Kinematics is a fundamental part of <strong>mechanics</strong> and serves as the foundation for understanding dynamics, motion in one dimension, and projectile motion.</p>

      <hr />

      <h2>🧩 Key Concepts of Kinematics</h2>
      <div class="concept-card">
        <ul>
          <li><strong>Rest:</strong> An object is at rest if its position does not change with respect to its surroundings.</li>
          <li><strong>Motion:</strong> An object is said to be in motion if it changes its position with time relative to a reference point.</li>
          <li><strong>Reference Point:</strong> A fixed point with respect to which the position of an object is described.</li>
        </ul>
      </div>

      <div class="concept-card">
        <h3>Scalar and Vector Quantities</h3>
        <table class="table">
          <thead>
            <tr><th>Quantity</th><th>Type</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td>Distance</td><td>Scalar</td><td>Total path length covered by an object.</td></tr>
            <tr><td>Displacement</td><td>Vector</td><td>Shortest straight-line distance from initial to final position.</td></tr>
            <tr><td>Speed</td><td>Scalar</td><td>Rate of change of distance.</td></tr>
            <tr><td>Velocity</td><td>Vector</td><td>Rate of change of displacement.</td></tr>
            <tr><td>Acceleration</td><td>Vector</td><td>Rate of change of velocity with time.</td></tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2>📊 Motion Along a Straight Line (1D Motion)</h2>
      <p>When an object moves in a straight path, all quantities can be represented along a single axis (usually the x-axis).</p>

      <div class="example-box">
        <h4>🔹 Example 1:</h4>
        <p>A car moves from 0 m to 100 m east in 10 seconds.</p>
        <ul>
          <li><strong>Distance:</strong> 100 m</li>
          <li><strong>Displacement:</strong> 100 m (as motion is in a straight line)</li>
          <li><strong>Average Speed:</strong> 100 / 10 = 10 m/s</li>
          <li><strong>Average Velocity:</strong> 100 / 10 = 10 m/s east</li>
        </ul>
      </div>

      <div class="example-box">
        <h4>🔹 Example 2:</h4>
        <p>A person walks 3 m east and then 4 m north.</p>
        <p>Here, the motion is not in a straight line.</p>
        <p><strong>Distance</strong> = 3 + 4 = <strong>7 m</strong></p>
        <p><strong>Displacement</strong> = √(3² + 4²) = <strong>5 m</strong> (towards northeast)</p>
      </div>

      <hr />

      <h2>⚙️ Instantaneous & Average Quantities</h2>
      <ul>
        <li><strong>Average Velocity (v̄)</strong> = Total Displacement / Total Time</li>
        <li><strong>Instantaneous Velocity</strong> = Velocity of the object at a particular instant of time.</li>
        <li><strong>Average Acceleration</strong> = Change in velocity / Time interval</li>
        <li><strong>Instantaneous Acceleration</strong> = Acceleration at a specific instant.</li>
      </ul>

      <div class="highlight-box">
        <p><strong>Note:</strong> Acceleration can be <span class="highlight">positive</span> (speeding up) or <span class="highlight red">negative</span> (slowing down, also called retardation).</p>
      </div>

      <hr />

      <h2>📐 Graphical Representation of Motion</h2>
      <p>Motion can be represented graphically to easily interpret speed, velocity, and acceleration relationships.</p>

      <div class="image-container">
        <img src="${kinematics1}" alt="Displacement-Time Graph" />
        <p class="image-caption">Displacement-Time Graph showing uniform and non-uniform motion</p>
      </div>

      <h3>1️⃣ Distance-Time Graph</h3>
      <ul>
        <li>A straight line indicates <strong>uniform motion</strong>.</li>
        <li>A curved line indicates <strong>non-uniform motion</strong>.</li>
      </ul>

      <h3>2️⃣ Velocity-Time Graph</h3>
      <ul>
        <li>The slope of this graph gives <strong>acceleration</strong>.</li>
        <li>The area under the graph gives <strong>displacement</strong>.</li>
      </ul>

      <h3>3️⃣ Acceleration-Time Graph</h3>
      <ul>
        <li>The area under the acceleration-time graph gives <strong>change in velocity</strong>.</li>
      </ul>

      <div class="image-container">
        <img src="${kinematics2}" alt="Velocity-Time Graph" />
        <p class="image-caption">Velocity-Time graph showing acceleration and retardation phases</p>
      </div>

      <hr />

      <h2>📘 Equations of Motion (for Uniform Acceleration)</h2>
      <p>For an object moving with uniform acceleration, three important equations relate displacement (s), initial velocity (u), final velocity (v), acceleration (a), and time (t):</p>

      <div class="formula-section">
        <div class="formula-grid">
          <div class="formula-card">
            <code>v = u + at</code>
            <p>Final velocity after time t</p>
          </div>
          <div class="formula-card">
            <code>s = ut + ½at²</code>
            <p>Displacement after time t</p>
          </div>
          <div class="formula-card">
            <code>v² = u² + 2as</code>
            <p>Relates displacement, velocity, and acceleration</p>
          </div>
        </div>
      </div>

      <div class="example-box">
        <h4>🔹 Example 3:</h4>
        <p>A car starts from rest and accelerates at 2 m/s² for 5 seconds.</p>
        <ul>
          <li>Given: u = 0, a = 2 m/s², t = 5 s</li>
          <li><strong>v = u + at = 0 + (2×5) = 10 m/s</strong></li>
          <li><strong>s = ut + ½at² = 0 + ½(2×25) = 25 m</strong></li>
        </ul>
        <p><strong>Result:</strong> Final velocity = 10 m/s, Displacement = 25 m</p>
      </div>

      <hr />

      <h2>🎯 Real-Life Applications of Kinematics</h2>
      <ul>
        <li>Designing safe road curves and vehicle braking systems.</li>
        <li>Tracking projectiles in sports (football, cricket, basketball).</li>
        <li>Analyzing motion of satellites and planets.</li>
        <li>In robotics — for path and trajectory control.</li>
      </ul>

      <div class="highlight-box">
        <p><strong>Summary:</strong> Kinematics gives us the language and tools to describe all types of motion. 
        Whether it’s a car accelerating, a ball thrown in the air, or a planet orbiting — every motion follows these basic kinematic principles.</p>
      </div>
    </div>
  `,
        },

        {
          id: "kinematics-formula",
          title: "Kinematics Formulas",
          content: `
    <div class="formula-page">
      <h2>📘 Kinematics Formulas Cheat Sheet</h2>
      
      <p>Kinematics is all about <strong>describing motion mathematically</strong>. These formulas help solve problems related to displacement, velocity, acceleration, and time for objects in motion. Understanding them deeply is essential for mastering physics.</p>
      
      <hr />

      <div class="formula-category">
        <h3>1️⃣ Basic Definitions</h3>
        <ul>
          <li>
            <strong>Average Velocity (v̄):</strong> 
            The ratio of total displacement to total time. 
            <code>v̄ = Δx / Δt</code>
            <div class="example-box">
              <p><strong>Example:</strong> A car moves 120 m east in 10 s. Find average velocity.</p>
              <p><strong>Solution:</strong> v̄ = Δx / Δt = 120 / 10 = <strong>12 m/s east</strong></p>
            </div>
          </li>
          <li>
            <strong>Instantaneous Velocity (v):</strong> 
            Velocity at a specific instant of time. 
            <code>v = dx/dt</code>
            <div class="example-box">
              <p><strong>Example:</strong> If x(t) = 5t², find instantaneous velocity at t = 3 s.</p>
              <p><strong>Solution:</strong> v = dx/dt = d(5t²)/dt = 10t → v(3) = 10×3 = <strong>30 m/s</strong></p>
            </div>
          </li>
          <li>
            <strong>Average Acceleration (ā):</strong> 
            Change in velocity over time interval. 
            <code>ā = Δv / Δt</code>
            <div class="example-box">
              <p><strong>Example:</strong> Velocity changes from 5 m/s to 25 m/s in 4 s. Find average acceleration.</p>
              <p><strong>Solution:</strong> ā = (25 - 5) / 4 = <strong>5 m/s²</strong></p>
            </div>
          </li>
          <li>
            <strong>Instantaneous Acceleration (a):</strong> 
            Acceleration at a specific instant. 
            <code>a = dv/dt</code>
            <div class="example-box">
              <p><strong>Example:</strong> If v(t) = 4t², find instantaneous acceleration at t = 2 s.</p>
              <p><strong>Solution:</strong> a = dv/dt = d(4t²)/dt = 8t → a(2) = 8×2 = <strong>16 m/s²</strong></p>
            </div>
          </li>
        </ul>
      </div>

      <hr />

      <div class="formula-category">
        <h3>2️⃣ Equations of Motion (Uniform Acceleration)</h3>
        <p>For objects moving with constant acceleration, the following equations connect <strong>displacement (s)</strong>, <strong>initial velocity (u)</strong>, <strong>final velocity (v)</strong>, <strong>acceleration (a)</strong>, and <strong>time (t)</strong>.</p>
        
        <div class="formula-list">
          <div class="formula-item">
            <code>v = u + at</code>
            <span>First equation: final velocity after time t</span>
            <div class="example-box">
              <p><strong>Example:</strong> A car starts from rest and accelerates at 3 m/s² for 5 s. Find final velocity.</p>
              <p><strong>Solution:</strong> v = u + at = 0 + 3×5 = <strong>15 m/s</strong></p>
            </div>
          </div>

          <div class="formula-item">
            <code>s = ut + ½at²</code>
            <span>Second equation: displacement after time t</span>
            <div class="example-box">
              <p><strong>Example:</strong> Using same car, find displacement after 5 s.</p>
              <p><strong>Solution:</strong> s = ut + ½at² = 0 + ½×3×25 = <strong>37.5 m</strong></p>
            </div>
          </div>

          <div class="formula-item">
            <code>v² = u² + 2as</code>
            <span>Third equation: relates displacement, velocity, and acceleration</span>
            <div class="example-box">
              <p><strong>Example:</strong> Check the final velocity using displacement s = 37.5 m.</p>
              <p><strong>Solution:</strong> v² = u² + 2as = 0 + 2×3×37.5 = 225 → v = <strong>15 m/s</strong></p>
            </div>
          </div>

          <div class="formula-item">
            <code>s = ½(u + v)t</code>
            <span>Displacement using average velocity</span>
            <div class="example-box">
              <p><strong>Example:</strong> Find displacement using u = 0, v = 15 m/s, t = 5 s.</p>
              <p><strong>Solution:</strong> s = ½(0 + 15)×5 = <strong>37.5 m</strong></p>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div class="formula-category">
        <h3>3️⃣ Special Cases</h3>
        <ul>
          <li><strong>Free Fall:</strong> a = g, u = 0 (if dropped), s = ½gt²</li>
          <li><strong>Vertically Upward Motion:</strong> v = u - gt, s = ut - ½gt²</li>
        </ul>
        <div class="example-box">
          <p><strong>Example:</strong> A ball dropped from 20 m. Find time to hit ground.</p>
          <p><strong>Solution:</strong> s = ½gt² → 20 = 0.5×9.8×t² → t² ≈ 4.08 → t ≈ 2.02 s</p>
        </div>
      </div>

      <hr />

      <div class="formula-category">
        <h3>4️⃣ Graphical Analysis</h3>
        <p>Graphs provide a visual understanding of motion:</p>
        <ul>
          <li><strong>Distance-Time Graph:</strong> Slope = speed/velocity</li>
          <li><strong>Velocity-Time Graph:</strong> Slope = acceleration, Area = displacement</li>
          <li><strong>Acceleration-Time Graph:</strong> Area = change in velocity</li>
        </ul>
        <div class="image-container">
          <img src="${kinematics3}" alt="Velocity-Time Graph" />
          <p class="image-caption">Velocity-Time graph showing constant acceleration</p>
        </div>
      </div>

      <hr />

      <div class="formula-category">
        <h3>5️⃣ Step-by-Step Problem Solving Strategy</h3>
        <ol>
          <li>Identify known quantities: u, v, a, s, t</li>
          <li>Choose the appropriate formula based on what you need to find</li>
          <li>Substitute values carefully</li>
          <li>Check units for consistency</li>
          <li>Calculate step by step</li>
        </ol>

        <div class="example-box">
          <p><strong>Example:</strong> A car accelerates from 10 m/s to 25 m/s in 5 s. Find acceleration and distance traveled.</p>
          <p><strong>Step 1:</strong> Known: u=10, v=25, t=5, a=? s=?</p>
          <p><strong>Step 2:</strong> a = (v-u)/t = (25-10)/5 = 3 m/s²</p>
          <p><strong>Step 3:</strong> s = ut + ½at² = 10×5 + 0.5×3×25 = 50 + 37.5 = <strong>87.5 m</strong></p>
        </div>
      </div>

      <hr />

      <div class="formula-category">
        <h3>6️⃣ Common Mistakes to Avoid</h3>
        <ul>
          <li>Confusing displacement and distance</li>
          <li>Not keeping track of vector directions</li>
          <li>Using formulas for non-uniform acceleration</li>
          <li>Ignoring units (meters vs km, seconds vs hours)</li>
        </ul>
      </div>

      <hr />

      <div class="formula-category">
        <h3>7️⃣ Summary Table</h3>
        <table class="table">
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Formula</th>
              <th>Unit</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Displacement</td><td>s = ut + ½at²</td><td>m</td></tr>
            <tr><td>Final Velocity</td><td>v = u + at</td><td>m/s</td></tr>
            <tr><td>Velocity²</td><td>v² = u² + 2as</td><td>m²/s²</td></tr>
            <tr><td>Average Velocity</td><td>v_avg = Δx/Δt</td><td>m/s</td></tr>
            <tr><td>Acceleration</td><td>a = Δv/Δt</td><td>m/s²</td></tr>
          </tbody>
        </table>
      </div>

      <hr />

      <div class="note-box">
        <p><strong>⚠️ Note:</strong> These formulas are only valid under <span class="highlight">constant acceleration</span>. For variable acceleration, calculus must be used.</p>
      </div>
    </div>
  `,
        },
        {
          id: "projectile-theory",
          title: "Projectile Motion",
          content: `
    <div class="content-section">
      <h2>📘 Projectile Motion</h2>
      <p><strong>Projectile motion</strong> is the motion of an object thrown into the air at an angle, following a <strong>parabolic path</strong> under the influence of gravity. It combines <strong>uniform horizontal motion</strong> and <strong>uniformly accelerated vertical motion</strong>.</p>
      
      <hr />

      <h3>🧩 Key Characteristics</h3>
      <ul>
        <li>The horizontal velocity (<strong>u_x</strong>) remains constant.</li>
        <li>The vertical velocity (<strong>u_y</strong>) changes due to gravity (<strong>g</strong>).</li>
        <li>The trajectory of a projectile is always a <strong>parabola</strong>.</li>
        <li>Air resistance is neglected for ideal projectile motion.</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 1: Understanding Motion</h4>
        <p>A ball is thrown at 20 m/s at an angle of 30° above horizontal. Determine horizontal and vertical components of velocity.</p>
        <ul>
          <li>Horizontal velocity: u_x = u cosθ = 20 × cos30° ≈ 17.32 m/s</li>
          <li>Vertical velocity: u_y = u sinθ = 20 × sin30° = 10 m/s</li>
        </ul>
      </div>

      <hr />

      <h3>📐 Formulas for Projectile Motion</h3>
      <ul>
        <li><strong>Time of Flight (T):</strong> Total time projectile is in the air  
          <code>T = (2 u sinθ) / g</code>
          <div class="example-box">
            <p>Example: u = 20 m/s, θ = 30° → T = (2×20×0.5)/9.8 ≈ 2.04 s</p>
          </div>
        </li>
        <li><strong>Maximum Height (H):</strong> Highest vertical position  
          <code>H = (u² sin²θ) / (2g)</code>
          <div class="example-box">
            <p>Example: H = (20² × 0.5²) / (2×9.8) = 100 / 19.6 ≈ 5.1 m</p>
          </div>
        </li>
        <li><strong>Horizontal Range (R):</strong> Total horizontal distance  
          <code>R = (u² sin2θ) / g</code>
          <div class="example-box">
            <p>Example: R = (20² × sin60°)/9.8 ≈ (400 × 0.866)/9.8 ≈ 35.3 m</p>
          </div>
        </li>
        <li><strong>Horizontal Velocity:</strong> <code>v_x = u cosθ</code></li>
        <li><strong>Vertical Velocity:</strong> <code>v_y = u sinθ - g t</code></li>
      </ul>

      <hr />

      <h3>🔹 Step-by-Step Problem Solving</h3>
      <ol>
        <li>Resolve initial velocity into horizontal (u cosθ) and vertical (u sinθ) components.</li>
        <li>Use vertical motion formulas to find time of flight, max height, vertical velocity at any time.</li>
        <li>Use horizontal motion formula for range: R = u_x × T</li>
        <li>Combine results to get trajectory, velocity at any point, or position.</li>
      </ol>

      <div class="example-box">
        <h4>Example 2: Complete Motion Analysis</h4>
        <p>A projectile is fired with u = 15 m/s at θ = 45°.</p>
        <ul>
          <li>u_x = 15 × cos45° ≈ 10.61 m/s</li>
          <li>u_y = 15 × sin45° ≈ 10.61 m/s</li>
          <li>Time of Flight: T = 2 u_y / g = 2×10.61 / 9.8 ≈ 2.17 s</li>
          <li>Maximum Height: H = u_y² / 2g = 10.61² / 19.6 ≈ 5.74 m</li>
          <li>Horizontal Range: R = u_x × T ≈ 10.61 × 2.17 ≈ 23 m</li>
        </ul>
      </div>

      <hr />

      <h3>📊 Graphical Representation</h3>
      <p>Projectile motion can be visualized using <strong>displacement-time</strong>, <strong>velocity-time</strong>, and <strong>trajectory graphs</strong>.</p>

      <div className="image-container">
  <img 
    src="${projectileImg1}" 
    alt="Projectile Trajectory Graph" 
    className="blog-image"
  />
  <p className="image-caption">Parabolic path of a projectile showing maximum height and range</p>
</div>

<div className="image-container">
  <img 
    src="${projectileImg2}" 
    alt="Velocity-Time Graph" 
    className="blog-image"
  />
  <p className="image-caption">Vertical velocity-time graph showing upward and downward motion</p>
</div>


      <hr />

      <h3>⚙️ Key Points to Remember</h3>
      <ul>
        <li>Horizontal motion is uniform (no acceleration).</li>
        <li>Vertical motion is accelerated (g = 9.8 m/s² downward).</li>
        <li>Time to rise = Time to fall = u_y / g</li>
        <li>Total time of flight = 2 × time to rise</li>
        <li>Maximum height occurs at t = T/2</li>
        <li>Velocity at highest point: v_y = 0, v_x remains constant</li>
      </ul>

      <div class="highlight-box">
        <p><strong>Note:</strong> The range is maximum at θ = 45° for a given speed in ideal conditions.</p>
      </div>

      <hr />

      <h3>📚 Real-Life Applications</h3>
      <ul>
        <li>Sports: Football, cricket, basketball throws follow projectile motion.</li>
        <li>Engineering: Designing water fountains, artillery, or missile trajectories.</li>
        <li>Space Science: Satellite launches and planetary probe trajectories.</li>
        <li>Everyday Life: Jumping from ramps, throwing objects, etc.</li>
      </ul>

      <hr />

      <h3>🔹 Practice Example</h3>
      <p>Problem: A stone is thrown with 10 m/s at 60°. Find:</p>
      <ol>
        <li>Horizontal and vertical velocity components</li>
        <li>Time of flight</li>
        <li>Maximum height</li>
        <li>Horizontal range</li>
      </ol>
      <div class="solution-box">
        <ul>
          <li>u_x = 10 × cos60° = 5 m/s</li>
          <li>u_y = 10 × sin60° ≈ 8.66 m/s</li>
          <li>Time of Flight: T = 2 u_y / g ≈ 1.77 s</li>
          <li>Maximum Height: H = u_y² / 2g ≈ 3.82 m</li>
          <li>Horizontal Range: R = u_x × T ≈ 5 × 1.77 ≈ 8.85 m</li>
        </ul>
      </div>

      <hr />

      <div class="summary-box">
        <p><strong>Summary:</strong> Projectile motion combines uniform horizontal motion and uniformly accelerated vertical motion. By breaking velocities into components and applying kinematic equations, we can calculate time, height, range, and velocities at any point. It is fundamental for understanding real-life motions and sports, as well as for engineering applications.</p>
      </div>
    </div>
  `,
        },
        {
          id: "laws-of-motion",
          title: "Laws of Motion",
          content: `
    <div class="content-section">
      <h2>📘 Newton's Laws of Motion</h2>
      <p><strong>Newton’s Laws of Motion</strong> describe the fundamental relationship between forces and motion of objects. 
      These laws form the foundation of classical mechanics.</p>
      
      <hr />

      <h3>1️⃣ First Law of Motion (Law of Inertia)</h3>
      <p>This law states: <strong>"An object remains at rest or continues to move with uniform velocity in a straight line unless acted upon by an external net force."</strong></p>
      <p><strong>Key Points:</strong></p>
      <ul>
        <li>Inertia is the tendency of an object to resist changes in motion.</li>
        <li>Objects with larger mass have greater inertia.</li>
        <li>Force is required to change the velocity (speed or direction) of an object.</li>
      </ul>
      <div class="example-box">
        <h4>🔹 Example 1:</h4>
        <p>A book on a table remains stationary until someone pushes it.</p>
        <p><strong>Observation:</strong> Without an external force, the object does not move.</p>
      </div>
      <div class="real-life-applications">
        <p><strong>Applications:</strong> Car seatbelts, helmets, stationery objects staying put.</p>
      </div>
      
      <hr />

      <h3>2️⃣ Second Law of Motion (F = ma)</h3>
      <p>This law states: <strong>"The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass."</strong></p>
      <code>F = m × a</code>
      <ul>
        <li>F = Net Force (N)</li>
        <li>m = Mass of the object (kg)</li>
        <li>a = Acceleration produced (m/s²)</li>
      </ul>
      <div class="example-box">
        <h4>🔹 Example 2:</h4>
        <p>Pushing a light box (5 kg) and a heavy box (20 kg) with same force:</p>
        <ul>
          <li>Light box acceleration: a = F/m → larger</li>
          <li>Heavy box acceleration: a = F/m → smaller</li>
        </ul>
        <p><strong>Observation:</strong> More massive objects require more force to achieve the same acceleration.</p>
      </div>
      <div class="formula-application">
        <h4>🔹 Sample Calculation:</h4>
        <p>Force applied = 50 N, mass = 10 kg</p>
        <p>Acceleration: a = F/m = 50 / 10 = 5 m/s²</p>
      </div>
      <div class="real-life-applications">
        <p><strong>Applications:</strong> Vehicle acceleration, lifting objects, rocket propulsion.</p>
      </div>

      <hr />

      <h3>3️⃣ Third Law of Motion (Action-Reaction)</h3>
      <p>This law states: <strong>"For every action, there is an equal and opposite reaction."</strong></p>
      <ul>
        <li>The forces are equal in magnitude and opposite in direction.</li>
        <li>They act on two different bodies.</li>
      </ul>
      <div class="example-box">
        <h4>🔹 Example 3:</h4>
        <p>Jumping: You push the ground down → the ground pushes you upward with equal force.</p>
      </div>
      <div class="real-life-applications">
        <p><strong>Applications:</strong> Walking (feet push ground back, body moves forward), swimming, rocket launch.</p>
      </div>

      <hr />

      <h3>⚙️ Additional Concepts</h3>
      <ul>
        <li><strong>Weight vs Mass:</strong> Weight is a force due to gravity (W = mg).</li>
        <li><strong>Friction:</strong> Opposes motion; acts along surface of contact.</li>
        <li><strong>Tension:</strong> Force in a stretched string/rope.</li>
        <li><strong>Normal Force:</strong> Perpendicular reaction force from surface.</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 4: Force Analysis</h4>
        <p>A block of mass 10 kg rests on a surface with friction μ = 0.2. Find force to start moving it.</p>
        <ul>
          <li>Weight: W = mg = 10 × 9.8 = 98 N</li>
          <li>Friction: f = μ × N = 0.2 × 98 ≈ 19.6 N</li>
          <li>Force applied > 19.6 N to start motion</li>
        </ul>
      </div>

      <hr />

      <h3>📊 Graphical Representation</h3>
      <p>Force vs Acceleration graph (from F = ma) is linear:</p>
      <div class="image-container">
        <img src="${ForceAcceleration1}" alt="Force vs Acceleration Graph" />
        <p class="image-caption">Linear relationship between force and acceleration</p>
      </div>

      <div class="image-container">
        <img src="${ForceAcceleration2}" alt="Action-Reaction Illustration" />
        <p class="image-caption">Illustration of Newton’s Third Law: Action-Reaction pair</p>
      </div>

      <hr />

      <h3>🔹 Practice Problems</h3>
      <ol>
        <li>A 15 kg block is pushed with 30 N force. Find its acceleration.</li>
        <li>Explain why passengers lurch forward when a car stops suddenly.</li>
        <li>A swimmer pushes water backwards. What is the reaction force that moves the swimmer forward?</li>
      </ol>
      <div class="solution-box">
        <p>1️⃣ a = F/m = 30 / 15 = 2 m/s²</p>
        <p>2️⃣ Law of Inertia: Passengers tend to continue motion; seatbelt exerts force to stop them.</p>
        <p>3️⃣ Action-Reaction: Water pushes swimmer forward.</p>
      </div>

      <hr />

      <div class="summary-box">
        <p><strong>Summary:</strong> Newton’s Laws explain how forces affect motion. First law describes inertia, second law quantifies force and acceleration, and third law explains action-reaction. These concepts are fundamental in mechanics, engineering, and everyday life.</p>
      </div>
    </div>
  `,
        },
        {
          id: "work-energy",
          title: "Work, Energy, and Power",
          content: `
    <div class="content-section">
      <h2>📘 Work, Energy, and Power</h2>
      <p>These are fundamental concepts in physics that describe how forces affect motion and how energy is transferred.</p>

      <hr />

      <h3>1️⃣ Work</h3>
      <p><strong>Definition:</strong> Work is done when a force is applied to an object and it moves in the direction of the force.</p>
      <code>W = F × d × cosθ</code>
      <ul>
        <li>W = Work done (Joules, J)</li>
        <li>F = Applied force (Newtons, N)</li>
        <li>d = Displacement of the object (meters, m)</li>
        <li>θ = Angle between force and displacement direction</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 1:</h4>
        <p>Lifting a 10 kg box vertically by 2 m. Force = weight = mg = 10 × 9.8 = 98 N</p>
        <p>Work done: W = F × d = 98 × 2 = <strong>196 J</strong></p>
      </div>

      <div class="example-box">
        <h4>🔹 Example 2 (Force at angle):</h4>
        <p>A force of 50 N is applied at 30° to move a box 3 m horizontally.</p>
        <p>W = F × d × cosθ = 50 × 3 × cos30° ≈ 50 × 3 × 0.866 ≈ <strong>129.9 J</strong></p>
      </div>

      <hr />

      <h3>2️⃣ Energy</h3>
      <p><strong>Energy</strong> is the capacity to do work.</p>

      <h4>🔹 Kinetic Energy (KE)</h4>
      <p>Energy due to motion: <code>KE = ½ mv²</code></p>
      <div class="example-box">
        <p>A 2 kg ball moving at 5 m/s:</p>
        <p>KE = ½ × 2 × 5² = 25 J</p>
      </div>

      <h4>🔹 Potential Energy (PE)</h4>
      <p>Energy due to position: <code>PE = mgh</code></p>
      <div class="example-box">
        <p>A 5 kg object at 10 m height:</p>
        <p>PE = 5 × 9.8 × 10 = <strong>490 J</strong></p>
      </div>

      <h4>🔹 Work-Energy Theorem</h4>
      <p>The work done on an object is equal to the change in its kinetic energy:</p>
      <code>W = ΔKE = KE_final - KE_initial</code>
      <div class="example-box">
        <p>A car accelerates from 0 to 20 m/s, mass = 1000 kg:</p>
        <p>ΔKE = ½ × 1000 × 20² - 0 = 200,000 J</p>
        <p>Work done by engine = 200 kJ</p>
      </div>

      <hr />

      <h3>3️⃣ Power</h3>
      <p><strong>Definition:</strong> Power is the rate at which work is done or energy is transferred.</p>
      <code>P = W/t</code>
      <ul>
        <li>P = Power (Watts, W)</li>
        <li>W = Work done (Joules, J)</li>
        <li>t = Time taken (seconds, s)</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 3:</h4>
        <p>Work done = 196 J, Time = 4 s</p>
        <p>P = W/t = 196 / 4 = <strong>49 W</strong></p>
      </div>

      <hr />

      <h3>4️⃣ Mechanical Energy</h3>
      <p>Total mechanical energy = Kinetic Energy + Potential Energy</p>
      <code>ME = KE + PE</code>
      <div class="example-box">
        <p>A pendulum of mass 2 kg at 5 m height moving at 4 m/s at bottom:</p>
        <p>PE = mgh = 2 × 9.8 × 5 = 98 J</p>
        <p>KE = ½ mv² = ½ × 2 × 4² = 16 J</p>
        <p>Total ME = 98 + 16 = <strong>114 J</strong></p>
      </div>

      <hr />

      <h3>5️⃣ Conservation of Energy</h3>
      <p>In the absence of non-conservative forces (like friction), total mechanical energy remains constant:</p>
      <code>KE_initial + PE_initial = KE_final + PE_final</code>
      <div class="example-box">
        <p>A ball of mass 1 kg dropped from 10 m height:</p>
        <ul>
          <li>PE_top = mgh = 1 × 9.8 × 10 = 98 J</li>
          <li>KE_top = 0 (at rest)</li>
          <li>At bottom: PE_bottom = 0, KE_bottom = 98 J</li>
        </ul>
      </div>

      <hr />

      <h3>6️⃣ Real-Life Applications</h3>
      <ul>
        <li>Calculating work done by machines.</li>
        <li>Designing roller coasters using potential and kinetic energy.</li>
        <li>Power rating of engines and motors.</li>
        <li>Sports: Work done by athletes and energy transfer.</li>
      </ul>

      <hr />

      <h3>📊 Graphical Representation</h3>
      <div class="image-container">
        <img src="${work1}" alt="Work-Energy Graph" />
        <p class="image-caption">Graph of work done vs displacement or energy changes</p>
      </div>

      <div class="image-container">
        <img src="${work2}" alt="Power-Time Graph" />
        <p class="image-caption">Graph showing power delivered over time</p>
      </div>

      <hr />

      <h3>🔹 Practice Problems</h3>
      <ol>
        <li>A force of 100 N moves a block 5 m. Work done?</li>
        <li>A 2 kg ball moving at 3 m/s. Find kinetic energy.</li>
        <li>Lifting 20 kg box 2 m in 5 s. Power developed?</li>
        <li>Ball dropped from 15 m. Find speed just before hitting ground (ignore air resistance).</li>
      </ol>
      <div class="solution-box">
        <p>1️⃣ W = F × d = 100 × 5 = 500 J</p>
        <p>2️⃣ KE = ½ mv² = ½ × 2 × 3² = 9 J</p>
        <p>3️⃣ W = mgh = 20 × 9.8 × 2 = 392 J → P = 392 / 5 ≈ 78.4 W</p>
        <p>4️⃣ PE_top = mgh = 2 × 9.8 × 15 = 294 J → KE_bottom = 294 J → v = √(2KE/m) = √(294) ≈ 12.14 m/s</p>
      </div>

      <hr />

      <div class="summary-box">
        <p><strong>Summary:</strong> Work, energy, and power are interrelated concepts that allow us to analyze forces, motion, and energy transfer in physical systems. Understanding them is key in mechanics, engineering, and daily life applications.</p>
      </div>
    </div>
  `,
        },
        {
          id: "momentum-collisions",
          title: "Momentum and Collisions",
          content: `
    <div class="content-section">
      <h2>📘 Momentum and Collisions</h2>
      <p><strong>Momentum</strong> is a measure of motion of a body and depends on its mass and velocity.</p>
      <code>p = m × v</code>
      <ul>
        <li>p = momentum (kg·m/s)</li>
        <li>m = mass (kg)</li>
        <li>v = velocity (m/s)</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 1:</h4>
        <p>A 2 kg ball moving at 3 m/s. Find momentum.</p>
        <p>p = m × v = 2 × 3 = <strong>6 kg·m/s</strong></p>
      </div>

      <hr />

      <h3>1️⃣ Law of Conservation of Momentum</h3>
      <p>In a closed system, the total momentum before an event (like a collision) is equal to the total momentum after the event, provided no external forces act.</p>
      <code>Σp_before = Σp_after</code>

      <div class="example-box">
        <h4>🔹 Example 2 (Two-Body Collision):</h4>
        <p>Two ice skaters, mass 50 kg and 70 kg, push each other. Skater A moves at 1 m/s. Find Skater B's velocity.</p>
        <p>Let v = velocity of Skater B:</p>
        <p>Initial total momentum = 0 (both at rest)</p>
        <p>After push: 50×1 + 70×v = 0 → v = -50/70 ≈ -0.714 m/s</p>
        <p><strong>Direction:</strong> opposite to Skater A</p>
      </div>

      <hr />

      <h3>2️⃣ Types of Collisions</h3>

      <h4>🔹 Elastic Collisions</h4>
      <p>Both <strong>momentum</strong> and <strong>kinetic energy</strong> are conserved.</p>
      <code>p_initial = p_final</code><br/>
      <code>KE_initial = KE_final</code>
      <div class="example-box">
        <p>Example: Two billiard balls collide and bounce off without losing speed.</p>
      </div>

      <h4>🔹 Inelastic Collisions</h4>
      <p>Momentum is conserved, but kinetic energy is not conserved (some energy converted to heat, sound, deformation).</p>
      <div class="example-box">
        <p>Example: A car crash where cars stick together after collision.</p>
      </div>

      <h4>🔹 Perfectly Inelastic Collisions</h4>
      <p>Special case of inelastic collision where colliding bodies stick together.</p>
      <div class="example-box">
        <p>Example: Clay balls colliding and sticking together.</p>
      </div>

      <hr />

      <h3>3️⃣ Momentum in One Dimension</h3>
      <p>For objects moving along a straight line:</p>
      <code>m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂</code>
      <div class="example-box">
        <h4>🔹 Example 3:</h4>
        <p>Car A (1000 kg) moving at 10 m/s collides with car B (1500 kg) at rest. Find velocities after perfectly inelastic collision (stick together).</p>
        <p>Total momentum before = 1000×10 + 1500×0 = 10,000 kg·m/s</p>
        <p>Total mass after = 1000 + 1500 = 2500 kg</p>
        <p>v = total momentum / total mass = 10,000 / 2500 = <strong>4 m/s</strong></p>
      </div>

      <hr />

      <h3>4️⃣ Momentum in Two Dimensions</h3>
      <p>Conservation applies separately in x and y directions:</p>
      <code>Σp_x_before = Σp_x_after</code><br/>
      <code>Σp_y_before = Σp_y_after</code>
      <div class="example-box">
        <h4>🔹 Example 4:</h4>
        <p>Two balls collide at right angles. Momentum conservation applied in each axis to find final velocities.</p>
      </div>

      <hr />

      <h3>5️⃣ Impulse</h3>
      <p>Impulse is the change in momentum of an object when a force acts over time.</p>
      <code>J = Δp = F × Δt</code>
      <ul>
        <li>J = Impulse (N·s)</li>
        <li>Δp = Change in momentum (kg·m/s)</li>
        <li>F = Force (N)</li>
        <li>Δt = Time duration of force (s)</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 5:</h4>
        <p>A 0.5 kg ball initially at rest is hit by a bat with average force 100 N for 0.02 s. Find change in momentum.</p>
        <p>J = F × Δt = 100 × 0.02 = <strong>2 N·s</strong></p>
        <p>Δp = 2 kg·m/s → final velocity = Δp/m = 2/0.5 = <strong>4 m/s</strong></p>
      </div>

      <hr />

      <h3>6️⃣ Real-Life Applications</h3>
      <ul>
        <li>Vehicle safety: Seat belts increase collision time, reducing force (impulse concept).</li>
        <li>Sports: Kicking, throwing, hitting balls.</li>
        <li>Rocket propulsion: Momentum change via expelled gas.</li>
        <li>Recoil of guns: Action-reaction principle with momentum conservation.</li>
      </ul>

      <hr />

      <h3>📊 Graphical Representation</h3>
      <div class="image-container">
        <img src="${Momentum1}" alt="Momentum Graph" />
        <p class="image-caption">Momentum vs Time or Impulse illustration</p>
      </div>

      <div class="image-container">
        <img src="${Momentum2}" alt="Collision Diagram" />
        <p class="image-caption">Elastic and inelastic collision diagram</p>
      </div>

      <hr />

      <h3>🔹 Practice Problems</h3>
      <ol>
        <li>Two cars (1000 kg and 1500 kg) moving at 10 m/s and 5 m/s collide inelastically. Find final velocity.</li>
        <li>A 0.2 kg ball at rest is hit by 50 N force for 0.1 s. Find final velocity.</li>
        <li>Two ice skaters, 60 kg and 40 kg, push each other. Skater A moves at 2 m/s. Find Skater B's velocity.</li>
        <li>Elastic collision: 2 kg ball at 5 m/s collides with 3 kg ball at rest. Find velocities after collision.</li>
      </ol>

      <div class="solution-box">
        <p>1️⃣ Total momentum = 1000×10 + 1500×5 = 17,500 kg·m/s, total mass = 1000+1500=2500 → v = 17,500/2500 = 7 m/s</p>
        <p>2️⃣ J = FΔt = 50 × 0.1 = 5 N·s → v = Δp/m = 5/0.2 = 25 m/s</p>
        <p>3️⃣ Momentum conservation: 60×2 + 40×v = 0 → v = -3 m/s</p>
        <p>4️⃣ Use conservation of momentum & KE equations → v1 ≈ 1 m/s, v2 ≈ 4 m/s</p>
      </div>

      <hr />

      <div class="summary-box">
        <p><strong>Summary:</strong> Momentum and collisions allow us to analyze interactions of objects in motion, predict post-collision velocities, and understand impulse effects in practical applications like sports, vehicle safety, and rockets.</p>
      </div>
    </div>
  `,
        },
        {
          id: "circular-motion",
          title: "Circular Motion",
          content: `
    <div class="content-section">
      <h2>📘 Circular Motion</h2>
      <p><strong>Circular motion</strong> occurs when an object moves along a circular path. Even if its speed is constant, its velocity changes continuously due to the change in direction, resulting in <strong>centripetal acceleration</strong>.</p>

      <div class="formula-section">
        <h3>🔹 Centripetal Acceleration and Force</h3>
        <ul>
          <li>Centripetal Acceleration: <code>a_c = v²/r</code></li>
          <li>Centripetal Force: <code>F_c = m × a_c = mv²/r</code></li>
          <li>r = radius of circular path</li>
          <li>v = tangential speed</li>
          <li>m = mass of the object</li>
        </ul>
      </div>

      <div class="example-box">
        <h4>🔹 Example 1:</h4>
        <p>A car of mass 1000 kg moves along a circular track of radius 50 m at a speed of 20 m/s. Find centripetal force.</p>
        <p>F_c = mv²/r = 1000 × (20)² / 50 = 1000 × 400 / 50 = 8000 N</p>
      </div>

      <hr />

      <h3>1️⃣ Uniform Circular Motion</h3>
      <p>If the speed of an object is constant but the direction changes, the motion is called <strong>uniform circular motion (UCM)</strong>.</p>
      <ul>
        <li>The velocity vector is always tangent to the circle.</li>
        <li>The acceleration vector always points toward the center (centripetal acceleration).</li>
      </ul>

      <div class="example-box">
        <p>Example: A satellite moving around the Earth at constant speed.</p>
      </div>

      <hr />

      <h3>2️⃣ Angular Quantities</h3>
      <ul>
        <li><strong>Angular Displacement:</strong> θ = s/r (radians)</li>
        <li><strong>Angular Velocity:</strong> ω = dθ/dt</li>
        <li><strong>Angular Acceleration:</strong> α = dω/dt</li>
      </ul>

      <div class="formula-section">
        <h4>🔹 Relationship Between Linear and Angular Quantities</h4>
        <ul>
          <li>v = r × ω</li>
          <li>a_c = v² / r = r × ω²</li>
          <li>a_t (tangential acceleration) = r × α</li>
        </ul>
      </div>

      <hr />

      <h3>3️⃣ Non-Uniform Circular Motion</h3>
      <p>If the speed changes along the circular path, there is <strong>tangential acceleration</strong> in addition to centripetal acceleration.</p>
      <ul>
        <li>Radial (centripetal) acceleration: a_r = v²/r</li>
        <li>Tangential acceleration: a_t = dv/dt</li>
        <li>Total acceleration: a = √(a_r² + a_t²)</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 2:</h4>
        <p>A car speeds up from 10 m/s to 20 m/s along a circular track of radius 25 m in 5 s. Find radial and tangential accelerations at v = 20 m/s.</p>
        <ul>
          <li>a_r = v²/r = 20²/25 = 16 m/s²</li>
          <li>a_t = Δv/Δt = (20-10)/5 = 2 m/s²</li>
          <li>Total acceleration a = √(16² + 2²) ≈ 16.12 m/s²</li>
        </ul>
      </div>

      <hr />

      <h3>4️⃣ Banking of Roads</h3>
      <p>To reduce skidding, curved roads are banked at an angle θ so that part of the normal force provides the centripetal force.</p>
      <ul>
        <li>tanθ = v²/(r × g)</li>
        <li>v = √(r × g × tanθ)</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 3:</h4>
        <p>A car travels on a banked curve of radius 100 m with no friction at 20 m/s. Find the banking angle.</p>
        <p>tanθ = v²/(r × g) = 400 / (100 × 9.8) ≈ 0.408 → θ ≈ 22.3°</p>
      </div>

      <hr />

      <h3>5️⃣ Vertical Circular Motion</h3>
      <p>Motion along a vertical circle (like a roller coaster or pendulum) involves:</p>
      <ul>
        <li>Gravity acting downward</li>
        <li>Centripetal force provided by tension or normal reaction</li>
      </ul>

      <div class="formula-section">
        <h4>🔹 Minimum Speed at Top of Vertical Circle</h4>
        <p>v_min = √(g × r)</p>
        <p>This ensures the object does not fall off the circular path.</p>
      </div>

      <div class="example-box">
        <h4>🔹 Example 4:</h4>
        <p>A ball of mass 0.5 kg swings in a vertical circle of radius 2 m. Minimum speed at the top:</p>
        <p>v_min = √(g × r) = √(9.8 × 2) ≈ 4.43 m/s</p>
      </div>

      <hr />

      <h3>6️⃣ Real-Life Applications of Circular Motion</h3>
      <ul>
        <li>Cars taking a turn along a curve</li>
        <li>Satellites revolving around planets</li>
        <li>Roller coasters and ferris wheels</li>
        <li>Earth’s rotation about its axis</li>
        <li>Electron motion in circular orbits in atoms (classical model)</li>
      </ul>

      <hr />

      <h3>7️⃣ Practice Problems</h3>
      <ol>
        <li>A 1000 kg car moves around a 50 m radius curve at 20 m/s. Find centripetal acceleration and force.</li>
        <li>A ball swings in a vertical circle of radius 1.5 m. Find minimum speed at the top.</li>
        <li>A road is banked for a speed of 30 m/s with radius 150 m. Find banking angle.</li>
        <li>Car accelerates from 10 to 25 m/s along a circular track of radius 40 m. Find radial, tangential, and total acceleration.</li>
      </ol>

      <div class="solution-box">
        <p>1️⃣ a_c = v²/r = 400/50 = 8 m/s², F_c = m × a_c = 1000 × 8 = 8000 N</p>
        <p>2️⃣ v_min = √(g × r) = √(9.8 × 1.5) ≈ 3.83 m/s</p>
        <p>3️⃣ tanθ = v²/(r × g) = 900/(150 × 9.8) ≈ 0.612 → θ ≈ 31.6°</p>
        <p>4️⃣ a_r = v²/r = 625/40 = 15.625 m/s², a_t = Δv/Δt = (25-10)/?, a_total = √(a_r² + a_t²)</p>
      </div>

      <hr />

      <h3>📊 Graphical Representation</h3>
      <div class="image-container">
        <img src="${CircularMotion1}" alt="Circular Motion Diagram" />
        <p class="image-caption">Centripetal and tangential acceleration vectors</p>
      </div>

      <div class="summary-box">
        <p><strong>Summary:</strong> Circular motion is everywhere — from cars on curved roads, satellites in orbit, to electrons in atoms. Understanding centripetal and tangential accelerations, forces, and banking of curves allows predicting motion and designing safe systems.</p>
      </div>
    </div>
  `,
        },
        {
          id: "gravitation",
          title: "Gravitation",
          content: `
    <div class="content-section">
      <h2>🌍 Gravitation</h2>
      <p><strong>Gravitation</strong> is the force of attraction between any two masses. It is a fundamental force that governs the motion of planets, satellites, and falling objects.</p>

      <div class="formula-section">
        <h3>🔹 Newton's Law of Gravitation</h3>
        <p>Every particle in the universe attracts every other particle with a force proportional to the product of their masses and inversely proportional to the square of the distance between them:</p>
        <code>F = G × (m₁ × m₂) / r²</code>
        <ul>
          <li>F = gravitational force</li>
          <li>m₁, m₂ = masses of the two objects</li>
          <li>r = distance between the centers of the two masses</li>
          <li>G = universal gravitational constant = 6.674 × 10⁻¹¹ N·m²/kg²</li>
        </ul>
      </div>

      <div class="example-box">
        <h4>🔹 Example 1:</h4>
        <p>Two 5 kg objects are 2 m apart. Find the gravitational force between them.</p>
        <p>F = G × (m₁ × m₂) / r² = 6.674×10⁻¹¹ × (5×5)/4 ≈ 4.17 × 10⁻¹⁰ N</p>
      </div>

      <hr />

      <h3>1️⃣ Acceleration due to Gravity (g)</h3>
      <p>Near the Earth's surface, all objects experience an acceleration due to gravity:</p>
      <code>g = 9.8 m/s²</code>
      <p>The weight of an object is the gravitational force it experiences due to Earth:</p>
      <code>W = m × g</code>

      <div class="example-box">
        <h4>🔹 Example 2:</h4>
        <p>A 10 kg object on Earth:</p>
        <p>W = m × g = 10 × 9.8 = 98 N</p>
      </div>

      <hr />

      <h3>2️⃣ Variation of g with Height and Depth</h3>
      <ul>
        <li>At height h above Earth’s surface: g_h = g × (1 - 2h/R)</li>
        <li>At depth d below Earth’s surface: g_d = g × (1 - d/R)</li>
        <li>R = radius of Earth (~6.371 × 10⁶ m)</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 3:</h4>
        <p>Find g at 1000 m above Earth’s surface:</p>
        <p>g_h = 9.8 × (1 - 2×1000/6.371×10⁶) ≈ 9.7969 m/s²</p>
      </div>

      <hr />

      <h3>3️⃣ Gravitational Potential Energy (U)</h3>
      <p>The work done in bringing a mass m from infinity to a distance r from another mass M:</p>
      <code>U = -G × (M × m) / r</code>
      <p>Near Earth’s surface, for small heights:</p>
      <code>U = m × g × h</code>

      <div class="example-box">
        <h4>🔹 Example 4:</h4>
        <p>Potential energy of a 2 kg object at 5 m height:</p>
        <p>U = m × g × h = 2 × 9.8 × 5 = 98 J</p>
      </div>

      <hr />

      <h3>4️⃣ Escape Velocity</h3>
      <p>The minimum velocity required to escape the gravitational pull of a planet:</p>
      <code>v_esc = √(2GM/R)</code>
      <p>For Earth: v_esc ≈ 11.2 km/s</p>

      <div class="example-box">
        <h4>🔹 Example 5:</h4>
        <p>For a planet of mass 5×10²⁴ kg and radius 6.371×10⁶ m:</p>
        <p>v_esc = √(2 × 6.674×10⁻¹¹ × 5×10²⁴ / 6.371×10⁶) ≈ 11.2 km/s</p>
      </div>

      <hr />

      <h3>5️⃣ Orbital Motion</h3>
      <p>Satellites move in circular orbits due to the balance of gravitational force and centripetal force:</p>
      <code>F_gravity = F_centripetal → G(Mm)/r² = mv²/r</code>
      <p>Orbital velocity: v = √(GM/r)</p>
      <p>Time period of satellite: T = 2πr / v = 2π √(r³/GM)</p>

      <div class="example-box">
        <h4>🔹 Example 6:</h4>
        <p>Satellite of radius 7000 km around Earth:</p>
        <p>v = √(6.674×10⁻¹¹ × 5.97×10²⁴ / 7×10⁶) ≈ 7.54 km/s</p>
      </div>

      <hr />

      <h3>6️⃣ Weightlessness</h3>
      <p>An object appears weightless when it is in free fall or in a spacecraft moving along a gravitational orbit, because there is no normal force acting on it.</p>

      <div class="example-box">
        <h4>🔹 Example 7:</h4>
        <p>A satellite in orbit experiences weightlessness because it is in continuous free fall around the Earth.</p>
      </div>

      <hr />

      <h3>7️⃣ Real-Life Applications</h3>
      <ul>
        <li>Calculating satellite orbits and space missions</li>
        <li>Predicting tides caused by Moon and Sun</li>
        <li>Designing structures with weight and load calculations</li>
        <li>Understanding planetary and stellar motion in astrophysics</li>
      </ul>

      <hr />

      <h3>8️⃣ Practice Problems</h3>
      <ol>
        <li>Calculate gravitational force between Earth and Moon (M_E = 5.97×10²⁴ kg, M_M = 7.35×10²² kg, r = 3.84×10⁸ m)</li>
        <li>Find g at 10 km height above Earth’s surface.</li>
        <li>Determine escape velocity from Mars (M = 6.42×10²³ kg, R = 3.39×10⁶ m).</li>
        <li>Find orbital velocity of a satellite 300 km above Earth.</li>
        <li>Calculate weight of a 50 kg astronaut on the Moon (g = 1.62 m/s²)</li>
      </ol>

      <div class="solution-box">
        <p>1️⃣ F = G × (M_E × M_M)/r² ≈ 1.98 × 10²⁰ N</p>
        <p>2️⃣ g_h ≈ 9.797 m/s²</p>
        <p>3️⃣ v_esc ≈ 5.03 km/s</p>
        <p>4️⃣ v_orb ≈ 7.73 km/s</p>
        <p>5️⃣ W = m × g = 50 × 1.62 = 81 N</p>
      </div>

      <hr />

      <div class="image-container">
        <img src="${Gravitation1}" alt="Gravitation Diagram" />
        <p class="image-caption">Gravitational force vectors and orbital motion</p>
      </div>

      <div class="summary-box">
        <p><strong>Summary:</strong> Gravitation governs motion of planets, satellites, and everyday objects. Newton’s law of gravitation, acceleration due to gravity, escape velocity, orbital motion, and weightlessness are key concepts to understand forces in nature and space.</p>
      </div>
    </div>
  `,
        },
        {
          id: "oscillations",
          title: "Oscillations and Simple Harmonic Motion",
          content: `
    <div class="content-section">
      <h2>🌟 Oscillations and Simple Harmonic Motion (SHM)</h2>
      <p><strong>Oscillatory motion</strong> is a motion that repeats itself after a fixed interval of time. Examples include a pendulum, a vibrating spring, or a tuning fork.</p>

      <hr />

      <h3>1️⃣ Simple Harmonic Motion (SHM)</h3>
      <p>SHM is a type of oscillation in which the restoring force is directly proportional to the displacement from the equilibrium position and acts toward it.</p>
      <code>F = -kx</code>
      <p>where k is the force constant, x is displacement.</p>

      <p>Displacement as a function of time:</p>
      <code>x(t) = A cos(ωt + φ)</code>
      <ul>
        <li>A = Amplitude (maximum displacement)</li>
        <li>ω = Angular frequency (rad/s)</li>
        <li>φ = Phase constant (depends on initial conditions)</li>
        <li>t = Time</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 1:</h4>
        <p>A mass attached to a spring of k = 100 N/m and mass m = 2 kg. Find angular frequency and period.</p>
        <p>ω = √(k/m) = √(100/2) = √50 ≈ 7.07 rad/s</p>
        <p>Period T = 2π/ω ≈ 0.888 s</p>
      </div>

      <hr />

      <h3>2️⃣ Key Parameters in SHM</h3>
      <ul>
        <li><strong>Amplitude (A):</strong> Maximum displacement from equilibrium.</li>
        <li><strong>Period (T):</strong> Time for one complete oscillation.</li>
        <li><strong>Frequency (f):</strong> Number of oscillations per second <code>f = 1/T</code>.</li>
        <li><strong>Angular frequency (ω):</strong> <code>ω = 2πf = 2π/T</code>.</li>
        <li><strong>Phase (φ):</strong> Determines the initial position of the oscillating body.</li>
      </ul>

      <hr />

      <h3>3️⃣ Velocity and Acceleration in SHM</h3>
      <p>Velocity of a particle:</p>
      <code>v(t) = dx/dt = -Aω sin(ωt + φ)</code>
      <p>Maximum velocity: <code>v_max = Aω</code></p>

      <p>Acceleration of a particle:</p>
      <code>a(t) = dv/dt = -Aω² cos(ωt + φ) = -ω² x(t)</code>
      <p>Maximum acceleration: <code>a_max = Aω²</code></p>

      <div class="example-box">
        <h4>🔹 Example 2:</h4>
        <p>A pendulum of amplitude 0.1 m and angular frequency 5 rad/s. Find maximum velocity and acceleration.</p>
        <p>v_max = Aω = 0.1 × 5 = 0.5 m/s</p>
        <p>a_max = Aω² = 0.1 × 25 = 2.5 m/s²</p>
      </div>

      <hr />

      <h3>4️⃣ Energy in SHM</h3>
      <p>Total mechanical energy (E) is conserved and is the sum of kinetic and potential energies:</p>
      <ul>
        <li>Kinetic Energy: <code>KE = ½ m v² = ½ m ω² (A² - x²)</code></li>
        <li>Potential Energy: <code>PE = ½ k x² = ½ m ω² x²</code></li>
        <li>Total Energy: <code>E = KE + PE = ½ k A² = constant</code></li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 3:</h4>
        <p>A mass-spring system with m = 0.5 kg, k = 50 N/m, amplitude A = 0.2 m.</p>
        <p>Total energy: E = ½ k A² = 0.5 × 50 × 0.04 = 1 J</p>
        <p>At x = 0.1 m, KE = ½ m ω² (A² - x²) = 0.5 × 100 × (0.04 - 0.01) = 1.5 J ??? → Check: Actually, ω² = k/m = 50/0.5 = 100, KE = 0.5 × 0.5 × 100 × 0.03 = 0.75 J, PE = 0.25 J, Total = 1 J ✔</p>
      </div>

      <hr />

      <h3>5️⃣ Examples of SHM</h3>
      <ul>
        <li>Simple pendulum: <code>T = 2π√(L/g)</code></li>
        <li>Mass-spring system: <code>T = 2π√(m/k)</code></li>
        <li>Torsional pendulum: <code>T = 2π√(I/k)</code></li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 4:</h4>
        <p>Simple pendulum of length 1 m. Find period:</p>
        <p>T = 2π√(L/g) = 2π√(1/9.8) ≈ 2.006 s</p>
      </div>

      <hr />

      <h3>6️⃣ Phase Difference</h3>
      <p>Two SHMs may differ in phase:</p>
      <ul>
        <li><strong>In phase:</strong> φ = 0 → maxima occur together</li>
        <li><strong>Out of phase:</strong> φ = π → maxima of one coincides with minima of other</li>
      </ul>

      <hr />

      <h3>7️⃣ Damped and Forced Oscillations</h3>
      <p><strong>Damped Oscillation:</strong> Amplitude decreases over time due to friction or resistance.</p>
      <p><strong>Forced Oscillation:</strong> External periodic force applied. Can lead to resonance when forcing frequency equals natural frequency.</p>

      <div class="example-box">
        <h4>🔹 Example 5:</h4>
        <p>A swing slows down if not pushed regularly → damped oscillation.</p>
        <p>Pushing at correct intervals → forced oscillation → resonance.</p>
      </div>

      <hr />

      <h3>8️⃣ Applications of SHM</h3>
      <ul>
        <li>Clocks using pendulums</li>
        <li>Vibrating strings in musical instruments</li>
        <li>Seismographs to detect earthquakes</li>
        <li>Oscillatory circuits in electronics</li>
      </ul>

      <hr />

      <div class="image-container">
        <img src="${SHM}" alt="SHM Graph" />
        <p class="image-caption">Displacement, velocity, and acceleration in simple harmonic motion</p>
      </div>

      <hr />

      <h3>9️⃣ Practice Problems</h3>
      <ol>
        <li>A mass of 0.2 kg attached to a spring (k = 80 N/m) oscillates with amplitude 0.1 m. Find T, ω, v_max, a_max.</li>
        <li>A pendulum of length 0.5 m completes 10 oscillations in 14 s. Find f and T.</li>
        <li>Calculate total energy of mass-spring system with m = 1 kg, k = 100 N/m, A = 0.2 m.</li>
        <li>Amplitude decreases to half in 5 oscillations. Identify type of damping.</li>
        <li>Find velocity of a particle at displacement x = 0.05 m for amplitude A = 0.1 m and ω = 10 rad/s.</li>
      </ol>

      <div class="solution-box">
        <p>1️⃣ ω = √(k/m) = 20 rad/s, T = 2π/ω ≈ 0.314 s, v_max = Aω = 2 m/s, a_max = Aω² = 4 m/s²</p>
        <p>2️⃣ T = 14/10 = 1.4 s, f = 1/T ≈ 0.714 Hz</p>
        <p>3️⃣ E = ½ k A² = ½ × 100 × 0.04 = 2 J</p>
        <p>4️⃣ Light damping</p>
        <p>5️⃣ v = ω√(A² - x²) = 10√(0.01 - 0.0025) = 10√0.0075 ≈ 0.866 m/s</p>
      </div>

      <div class="summary-box">
        <p><strong>Summary:</strong> SHM is a fundamental type of oscillatory motion. Concepts include displacement, velocity, acceleration, energy, period, frequency, damping, and resonance. Applications range from clocks to seismographs and musical instruments.</p>
      </div>
    </div>
  `,
        },
        {
          id: "waves",
          title: "Waves and Sound",
          content: `
    <div class="content-section">
      <h2>🌊 Waves and Sound</h2>
      <p><strong>Waves</strong> are disturbances that transfer energy from one point to another without the transfer of matter.</p>

      <hr />

      <h3>1️⃣ Types of Waves</h3>
      <ul>
        <li><strong>Mechanical Waves:</strong> Require a medium (solid, liquid, or gas) to propagate. Examples: Sound, water waves.</li>
        <li><strong>Electromagnetic Waves:</strong> Do not require a medium. Examples: Light, radio waves.</li>
        <li><strong>Transverse Waves:</strong> Particle motion is perpendicular to wave propagation. Example: Water waves.</li>
        <li><strong>Longitudinal Waves:</strong> Particle motion is parallel to wave propagation. Example: Sound waves.</li>
      </ul>

      <hr />

      <h3>2️⃣ Wave Parameters</h3>
      <ul>
        <li><strong>Wavelength (λ):</strong> Distance between two consecutive crests or troughs.</li>
        <li><strong>Frequency (f):</strong> Number of oscillations per second (Hz).</li>
        <li><strong>Amplitude (A):</strong> Maximum displacement of a particle from equilibrium.</li>
        <li><strong>Velocity (v):</strong> Speed at which the wave propagates <code>v = f λ</code></li>
        <li><strong>Period (T):</strong> Time for one complete wave <code>T = 1/f</code></li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 1:</h4>
        <p>A sound wave has frequency f = 171.5 Hz and wavelength λ = 2 m. Find wave speed.</p>
        <p>v = f λ = 171.5 × 2 = 343 m/s</p>
      </div>

      <hr />

      <h3>3️⃣ Speed of Sound</h3>
      <ul>
        <li>In air (20°C): v ≈ 343 m/s</li>
        <li>In water: v ≈ 1480 m/s</li>
        <li>In steel: v ≈ 5100 m/s</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 2:</h4>
        <p>If a steel rod has a longitudinal wave with λ = 2 m and frequency f = 2550 Hz, speed of wave:</p>
        <p>v = f λ = 2550 × 2 = 5100 m/s</p>
      </div>

      <hr />

      <h3>4️⃣ Wave Equation</h3>
      <p>General wave equation for a sinusoidal wave:</p>
      <code>y(x, t) = A sin(kx - ωt + φ)</code>
      <ul>
        <li>k = wave number = 2π/λ</li>
        <li>ω = angular frequency = 2πf</li>
        <li>φ = phase constant</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 3:</h4>
        <p>A wave with amplitude A = 0.05 m, λ = 2 m, f = 5 Hz:</p>
        <p>k = 2π/λ = π rad/m</p>
        <p>ω = 2πf = 10π rad/s</p>
        <p>Wave equation: y(x,t) = 0.05 sin(π x - 10π t)</p>
      </div>

      <hr />

      <h3>5️⃣ Sound Waves</h3>
      <p>Sound waves are longitudinal mechanical waves caused by vibrations of particles in a medium.</p>
      <ul>
        <li>Longitudinal waves consist of compressions and rarefactions.</li>
        <li>Sound requires a medium (cannot travel in vacuum).</li>
        <li>Speed depends on medium density and elasticity.</li>
      </ul>

      <div class="image-container">
        <img src="${sound1}" alt="Sound Wave Graph" />
        <p class="image-caption">Longitudinal sound wave showing compressions and rarefactions</p>
      </div>

      <hr />

      <h3>6️⃣ Intensity and Loudness</h3>
      <ul>
        <li>Intensity (I) = Power per unit area <code>I = P/A</code></li>
        <li>Loudness is perceived by human ear (related to intensity)</li>
        <li>Decibel scale: <code>β = 10 log10(I/I0)</code>, where I0 = 10⁻¹² W/m² (threshold of hearing)</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 4:</h4>
        <p>Intensity of sound I = 10⁻⁶ W/m², find sound level in dB.</p>
        <p>β = 10 log10(10⁻⁶ / 10⁻¹²) = 10 × 6 = 60 dB</p>
      </div>

      <hr />

      <h3>7️⃣ Doppler Effect</h3>
      <p>The apparent change in frequency when the source or observer is moving:</p>
      <code>f' = f (v ± vo)/(v ∓ vs)</code>
      <ul>
        <li>f' = observed frequency</li>
        <li>f = actual frequency</li>
        <li>v = speed of sound</li>
        <li>vo = observer speed toward source (+) or away (-)</li>
        <li>vs = source speed toward observer (-) or away (+)</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 5:</h4>
        <p>Ambulance approaches at 30 m/s with siren f = 700 Hz. Find apparent frequency for observer at rest (v = 343 m/s).</p>
        <p>f' = 700 × (343 / (343 - 30)) ≈ 761 Hz</p>
      </div>

      <hr />

      <h3>8️⃣ Musical Notes</h3>
      <ul>
        <li>Sound pitch depends on frequency.</li>
        <li>Human hearing range: 20 Hz – 20 kHz.</li>
        <li>Musical instruments produce standing waves.</li>
      </ul>

      <div class="image-container">
        <img src="${sound2}" alt="Musical Instrument Waves" />
        <p class="image-caption">Standing waves in a stringed instrument</p>
      </div>

      <hr />

      <h3>9️⃣ Applications of Waves and Sound</h3>
      <ul>
        <li>Sonar: Underwater navigation using sound waves.</li>
        <li>Ultrasound: Medical imaging and diagnostics.</li>
        <li>Musical instruments and acoustics.</li>
        <li>Communication: Radio, telephone, and audio signals.</li>
      </ul>

      <hr />

      <h3>🔟 Practice Problems</h3>
      <ol>
        <li>A wave has λ = 0.5 m, f = 100 Hz. Find velocity.</li>
        <li>Sound intensity = 10⁻⁴ W/m². Find decibel level.</li>
        <li>A source emits f = 500 Hz moving toward stationary observer at 20 m/s. Find observed frequency.</li>
        <li>Calculate wavelength of sound in water (v = 1480 m/s) for f = 1000 Hz.</li>
        <li>A string has fundamental frequency 440 Hz. Find wavelength if v = 330 m/s.</li>
      </ol>

      <div class="solution-box">
        <p>1️⃣ v = f λ = 100 × 0.5 = 50 m/s</p>
        <p>2️⃣ β = 10 log10(10⁻⁴ / 10⁻¹²) = 80 dB</p>
        <p>3️⃣ f' = 500 × (343 / (343 - 20)) ≈ 530 Hz</p>
        <p>4️⃣ λ = v / f = 1480 / 1000 = 1.48 m</p>
        <p>5️⃣ λ = v / f = 330 / 440 ≈ 0.75 m</p>
      </div>

      <div class="summary-box">
        <p><strong>Summary:</strong> Waves transfer energy without matter. Sound is a longitudinal wave. Key concepts include wave parameters, Doppler effect, intensity, musical notes, and applications in sonar, medicine, and communication.</p>
      </div>
    </div>
  `,
        },
        {
          id: "optics",
          title: "Optics and Light",
          content: `
    <div class="content-section">
      <h2>💡 Optics and Light</h2>
      <p><strong>Optics</strong> is the branch of physics that studies the behavior and properties of light, including reflection, refraction, lenses, mirrors, and optical instruments.</p>

      <hr />

      <h3>1️⃣ Nature of Light</h3>
      <ul>
        <li>Light is an electromagnetic wave.</li>
        <li>Travels in straight lines in a homogeneous medium.</li>
        <li>Speed of light in vacuum: c ≈ 3 × 10⁸ m/s.</li>
        <li>Can behave as a particle (photons) and a wave (wave theory).</li>
      </ul>

      <hr />

      <h3>2️⃣ Reflection of Light</h3>
      <p>When light bounces off a surface, it follows the <strong>law of reflection</strong>:</p>
      <ul>
        <li>Angle of incidence (i) = Angle of reflection (r)</li>
        <li>Incident ray, reflected ray, and normal lie in the same plane.</li>
      </ul>

      <div class="image-container">
        <img src="${ReflectionLight}" alt="Reflection Diagram" />
        <p class="image-caption">Law of reflection showing incident and reflected rays</p>
      </div>

      <div class="example-box">
        <h4>🔹 Example 1:</h4>
        <p>A ray strikes a plane mirror at 30° with the normal. Find angle of reflection.</p>
        <p><strong>Solution:</strong> Angle of reflection r = i = 30°</p>
      </div>

      <hr />

      <h3>3️⃣ Refraction of Light</h3>
      <p>Refraction occurs when light passes from one medium to another and changes speed, bending at the interface.</p>
      <ul>
        <li>Snell's Law: <code>n1 sin θ1 = n2 sin θ2</code></li>
        <li>n1, n2 = refractive indices of two media</li>
        <li>θ1 = angle of incidence, θ2 = angle of refraction</li>
      </ul>

      <div class="image-container">
        <img src="${Refractionlight}" alt="Refraction Diagram" />
        <p class="image-caption">Refraction of light at a boundary between two media</p>
      </div>

      <div class="example-box">
        <h4>🔹 Example 2:</h4>
        <p>Light passes from air (n = 1) into glass (n = 1.5) at 30° incidence. Find refraction angle θ2.</p>
        <p><strong>Solution:</strong> sin θ2 = n1/n2 × sin θ1 = 1/1.5 × sin30° = 0.333 → θ2 ≈ 19.5°</p>
      </div>

      <hr />

      <h3>4️⃣ Lenses</h3>
      <p>Lenses are transparent media that refract light to form images.</p>
      <ul>
        <li><strong>Convex Lens:</strong> Converging lens, forms real or virtual images.</li>
        <li><strong>Concave Lens:</strong> Diverging lens, forms virtual images.</li>
      </ul>

      <h4>Lens Formula:</h4>
      <code>1/f = 1/v - 1/u</code>
      <ul>
        <li>f = focal length</li>
        <li>v = image distance</li>
        <li>u = object distance</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 3:</h4>
        <p>Convex lens of f = 20 cm forms an image at v = 30 cm. Find object distance u.</p>
        <p><strong>Solution:</strong> 1/u = 1/v - 1/f = 1/30 - 1/20 = (2-3)/60 = -1/60 → u = -60 cm</p>
        <p>Negative sign indicates the object is on the opposite side of the lens.</p>
      </div>

      <hr />

      <h3>5️⃣ Mirrors</h3>
      <ul>
        <li>Concave mirror: Converging mirror, forms real or virtual images.</li>
        <li>Convex mirror: Diverging mirror, forms virtual images.</li>
      </ul>

      <h4>Mirror Formula:</h4>
      <code>1/f = 1/v + 1/u</code>
      <ul>
        <li>f = focal length</li>
        <li>v = image distance</li>
        <li>u = object distance</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 4:</h4>
        <p>A concave mirror forms an image 15 cm from the mirror of an object 10 cm away. Find focal length.</p>
        <p><strong>Solution:</strong> 1/f = 1/v + 1/u = 1/15 + 1/10 = (2+3)/30 = 5/30 → f = 6 cm</p>
      </div>

      <hr />

      <h3>6️⃣ Magnification</h3>
      <p>Magnification M = Image height / Object height = - v/u</p>
      <ul>
        <li>Negative magnification → image is inverted</li>
        <li>Positive magnification → image is upright</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 5:</h4>
        <p>Concave mirror, object distance u = 10 cm, image distance v = 15 cm. Find magnification.</p>
        <p>M = -v/u = -15/10 = -1.5 → Image is 1.5× larger and inverted</p>
      </div>

      <hr />

      <h3>7️⃣ Applications of Optics</h3>
      <ul>
        <li>Corrective lenses: Glasses for myopia or hypermetropia.</li>
        <li>Microscopes, telescopes, and cameras.</li>
        <li>Periscopes and optical instruments in submarines.</li>
        <li>Laser optics for communication and medical applications.</li>
      </ul>

      <hr />

      <h3>8️⃣ Practice Problems</h3>
      <ol>
        <li>Convex lens f = 25 cm, object at 50 cm. Find image distance and magnification.</li>
        <li>Concave mirror f = 10 cm, object at 15 cm. Find image distance and magnification.</li>
        <li>Light passes from water (n = 1.33) to air at 45° incidence. Find angle of refraction.</li>
        <li>Plane mirror, object at 20 cm. Find image distance.</li>
        <li>Convex lens f = 30 cm, image at 60 cm. Find object distance.</li>
      </ol>

      <div class="solution-box">
        <p>1️⃣ 1/v = 1/f + 1/u = 1/25 + 1/50 = 3/50 → v ≈ 16.67 cm, M = -v/u = -16.67/50 ≈ -0.33</p>
        <p>2️⃣ 1/v = 1/f - 1/u = 1/10 - 1/15 = 1/30 → v = 30 cm, M = -v/u = -30/15 = -2</p>
        <p>3️⃣ sin θ2 = n1/n2 × sin θ1 = 1.33/1 × sin45° ≈ 0.94 → θ2 ≈ 70°</p>
        <p>4️⃣ Plane mirror: Image distance = object distance = 20 cm</p>
        <p>5️⃣ 1/u = 1/v - 1/f = 1/60 - 1/30 = -1/60 → u = -60 cm</p>
      </div>

      <div class="summary-box">
        <p><strong>Summary:</strong> Optics deals with reflection, refraction, lenses, mirrors, and light behavior. Lens and mirror formulas, magnification, and refractive index are key concepts with real-life applications in glasses, cameras, and optical instruments.</p>
      </div>
    </div>
  `,
        },
      ],
    },
    chemistry: {
      title: "Chemistry",
      subtopics: [
        {
          id: "atomic-theory",
          title: "Atomic Structure",
          content: `
    <div class="content-section">
      <h2>📘 Atomic Structure</h2>
      <p><strong>Atomic structure</strong> explains the composition and arrangement of atoms — the fundamental building blocks of matter. 
      From early atomic theories to modern quantum models, scientists have progressively refined our understanding of atoms.</p>

      <hr />

      <h3>1️⃣ Dalton's Atomic Theory</h3>
      <p>John Dalton (1803) proposed the first scientific model of the atom:</p>
      <ul>
        <li>All matter is made of indivisible atoms.</li>
        <li>Atoms of the same element are identical in mass and properties.</li>
        <li>Atoms combine in simple ratios to form compounds.</li>
        <li>Chemical reactions involve rearrangement of atoms, not their creation or destruction.</li>
      </ul>
      <div class="example-box">
        <h4>🔹 Example:</h4>
        <p>Water (H₂O) forms from 2 hydrogen atoms and 1 oxygen atom, illustrating the combination of atoms in fixed ratios.</p>
      </div>
      <div class="highlight-box">
        <p><strong>Highlight:</strong> Dalton's model explained chemical reactions but could not explain subatomic structure or isotopes.</p>
      </div>

      <hr />

      <h3>2️⃣ Thomson's Plum Pudding Model</h3>
      <p>J.J. Thomson (1897) discovered the electron and proposed a new model:</p>
      <ul>
        <li>Atoms are spheres of positive charge.</li>
        <li>Electrons are embedded within the positive “pudding.”</li>
        <li>Electrons balance the positive charge of the atom.</li>
      </ul>
      <div class="image-container">
        <img src="${Thomson}" alt="Thomson Plum Pudding Model" />
        <p class="image-caption">Thomson's model showing electrons embedded in a positive sphere</p>
      </div>
      <div class="example-box">
        <p>Example: Cathode ray experiments led to discovery of electrons → negative particles inside atom.</p>
      </div>
      <div class="highlight-box">
        <p><strong>Highlight:</strong> Thomson's model introduced subatomic particles but could not explain nucleus or electron arrangement.</p>
      </div>

      <hr />

      <h3>3️⃣ Rutherford’s Nuclear Model</h3>
      <p>Ernest Rutherford (1911) performed the gold foil experiment, discovering the atomic nucleus:</p>
      <ul>
        <li>Atom mostly empty space.</li>
        <li>All positive charge and most mass concentrated in a small nucleus.</li>
        <li>Electrons orbit the nucleus.</li>
      </ul>
      <div class="image-container">
        <img src="${Rutherford}" alt="Rutherford Atomic Model" />
        <p class="image-caption">Rutherford model with electrons orbiting dense nucleus</p>
      </div>
      <div class="example-box">
        <p>Example: Alpha particles mostly pass through gold foil, but few are deflected → dense positive nucleus.</p>
      </div>
      <div class="highlight-box">
        <p><strong>Highlight:</strong> Rutherford's model introduced the nucleus but could not explain electron stability or energy levels.</p>
      </div>

      <hr />

      <h3>4️⃣ Bohr's Model of the Atom</h3>
      <p>Niels Bohr (1913) proposed a planetary model of the atom:</p>
      <ul>
        <li>Electrons orbit the nucleus in fixed energy levels (shells).</li>
        <li>Electrons do not radiate energy while in stable orbits.</li>
        <li>Energy is absorbed or emitted when electrons jump between levels (quantized energy).</li>
      </ul>
      <div class="image-container">
        <img src="${Bohr}" alt="Bohr Atomic Model" />
        <p class="image-caption">Bohr model showing electrons in quantized orbits around nucleus</p>
      </div>
      <div class="example-box">
        <p>Example: Hydrogen atom spectrum explained by electron transitions between energy levels.</p>
      </div>
      <div class="highlight-box">
        <p><strong>Highlight:</strong> Bohr model explained spectral lines but could not explain multi-electron atoms accurately.</p>
      </div>

      <hr />

      <h3>5️⃣ Quantum Mechanical Model</h3>
      <p>The modern atomic theory, based on quantum mechanics, describes electrons as wavefunctions:</p>
      <ul>
        <li>Electrons exist in <strong>probability clouds (orbitals)</strong>, not fixed orbits.</li>
        <li>Each orbital has a specific energy and shape (s, p, d, f).</li>
        <li>Heisenberg’s Uncertainty Principle: Cannot know exact position and momentum simultaneously.</li>
        <li>Schrödinger equation describes allowed energies and spatial distributions.</li>
      </ul>
      <div class="image-container">
        <img src="${Quantum}" alt="Quantum Atomic Model" />
        <p class="image-caption">Electron cloud model showing probability density of electrons</p>
      </div>
      <div class="example-box">
        <p>Example: In hydrogen atom, electron is more likely to be found close to nucleus → 1s orbital.</p>
      </div>
      <div class="highlight-box">
        <p><strong>Highlight:</strong> Quantum model explains multi-electron atoms, chemical bonding, and spectroscopy accurately.</p>
      </div>

      <hr />

      <h3>6️⃣ Atomic Particles</h3>
      <ul>
        <li><strong>Protons (p⁺):</strong> Positive charge, mass ≈ 1 u, found in nucleus.</li>
        <li><strong>Neutrons (n⁰):</strong> Neutral, mass ≈ 1 u, in nucleus, contribute to isotopes.</li>
        <li><strong>Electrons (e⁻):</strong> Negative charge, negligible mass, orbit nucleus.</li>
      </ul>
      <div class="highlight-box">
        <p><strong>Highlight:</strong> Number of protons = atomic number, determines element identity. Electrons = protons in neutral atom. Neutrons affect atomic mass and isotopes.</p>
      </div>

      <hr />

      <h3>7️⃣ Isotopes, Isobars, and Isotones</h3>
      <ul>
        <li><strong>Isotopes:</strong> Same atomic number, different mass number (e.g., C-12, C-14).</li>
        <li><strong>Isobars:</strong> Same mass number, different atomic number.</li>
        <li><strong>Isotones:</strong> Same number of neutrons, different atomic number.</li>
      </ul>

      <hr />

      <h3>8️⃣ Atomic Spectra</h3>
      <p>When electrons move between energy levels, they emit or absorb light, producing atomic spectra:</p>
      <ul>
        <li><strong>Emission Spectrum:</strong> Bright lines on dark background.</li>
        <li><strong>Absorption Spectrum:</strong> Dark lines on bright background.</li>
      </ul>
      <div class="image-container">
        <img src="${Atomic}" alt="Atomic Spectra" />
        <p class="image-caption">Emission and absorption spectra of hydrogen</p>
      </div>

      <hr />

      <h3>9️⃣ Examples & Real-Life Applications</h3>
      <ul>
        <li>Lasers → electron transitions in atoms.</li>
        <li>Nuclear power → fission of atomic nuclei.</li>
        <li>Medical imaging → isotopes in diagnostics.</li>
        <li>Chemical bonding → determined by electron arrangement.</li>
        <li>Spectroscopy → identifying elements in stars and materials.</li>
      </ul>

      <hr />

      <h3>🔹 Practice Problems</h3>
      <ol>
        <li>Draw the Bohr model for lithium (Z=3) and indicate electron shells.</li>
        <li>Calculate the number of neutrons in C-14.</li>
        <li>Explain why isotopes have similar chemical properties but different masses.</li>
        <li>Identify s, p, d orbitals and their shapes.</li>
        <li>Explain the difference between emission and absorption spectra.</li>
      </ol>

      <div class="solution-box">
        <p>1️⃣ Lithium: 2 electrons in 1st shell, 1 in 2nd shell.</p>
        <p>2️⃣ Neutrons in C-14: 14-6 = 8 neutrons.</p>
        <p>3️⃣ Isotopes same protons → same chemistry, different mass affects stability.</p>
        <p>4️⃣ s = spherical, p = dumbbell-shaped, d = cloverleaf, f = complex.</p>
        <p>5️⃣ Emission = light emitted, absorption = light absorbed by electrons.</p>
      </div>

      <hr />

      <div class="summary-box">
        <p><strong>Summary:</strong> Atomic structure evolved from Dalton’s indivisible atom to quantum mechanical models. Understanding subatomic particles, energy levels, isotopes, and atomic spectra is essential in chemistry, physics, and modern technology.</p>
      </div>
    </div>
  `,
        },

        {
          id: "mole-concept",
          title: "Mole Concept",
          content: `
    <div class="content-section">
      <h2>📘 Mole Concept</h2>
      <p>The <strong>mole</strong> is the SI unit used to measure the <em>amount of substance</em>. It connects the microscopic world of atoms, molecules, and ions to macroscopic quantities that we can measure in the laboratory.</p>

      <div class="highlight-box">
        <p><strong>Definition:</strong> 1 mole contains exactly <strong>6.022 × 10²³ particles</strong> (Avogadro's number, Nₐ).</p>
      </div>

      <hr />

      <h3>1️⃣ Fundamental Terms</h3>
      <ul>
        <li><strong>Mole (n):</strong> Amount of substance containing Nₐ particles.</li>
        <li><strong>Molar Mass (M):</strong> Mass of 1 mole of a substance in grams.</li>
        <li><strong>Number of Particles (N):</strong> Total atoms, molecules, ions, or electrons in a sample.</li>
        <li><strong>Molarity (M):</strong> Number of moles of solute per liter of solution.</li>
      </ul>

      <hr />

      <h3>2️⃣ Key Formulas</h3>
      <ul>
        <li><strong>Number of moles:</strong> <code>n = mass / M</code></li>
        <li><strong>Molarity:</strong> <code>M = n / V (L)</code></li>
        <li><strong>Number of particles:</strong> <code>N = n × Nₐ</code></li>
      </ul>

      <div class="highlight-box">
        <p><strong>Tip:</strong> Always keep units consistent: mass in grams, volume in liters, Nₐ = 6.022 × 10²³.</p>
      </div>

      <hr />

      <h3>3️⃣ Relationship Between Mass, Moles, and Particles</h3>
      <p>The mole allows us to count particles by weighing substances:</p>
      <ul>
        <li>If you have 12 g of carbon, n = 12 / 12 = 1 mole.</li>
        <li>Number of carbon atoms: N = 1 × 6.022 × 10²³ = 6.022 × 10²³ atoms.</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 1:</h4>
        <p>Calculate the number of moles in 18 g of water (H₂O).</p>
        <ul>
          <li>Molar mass: M = 2×1 + 16 = 18 g/mol</li>
          <li>n = mass / M = 18 / 18 = 1 mole</li>
          <li>Number of molecules: N = n × Nₐ = 6.022 × 10²³ molecules</li>
        </ul>
      </div>

      <hr />

      <h3>4️⃣ Avogadro’s Number (Nₐ)</h3>
      <p>Avogadro’s number defines the number of particles in 1 mole of any substance. It allows chemists to bridge the microscopic and macroscopic worlds.</p>
      <ul>
        <li>1 mole of H atoms = 6.022 × 10²³ atoms</li>
        <li>1 mole of NaCl = 6.022 × 10²³ formula units</li>
      </ul>

      <div class="highlight-box">
        <p><strong>Fact:</strong> Nₐ is constant for all substances, whether atoms, molecules, ions, or electrons.</p>
      </div>

      <hr />

      <h3>5️⃣ Molar Mass and Mass Relationship</h3>
      <p>The <strong>molar mass</strong> is obtained from the periodic table:</p>
      <ul>
        <li>H = 1 g/mol, O = 16 g/mol</li>
        <li>H₂O = 2×1 + 16 = 18 g/mol</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 2:</h4>
        <p>Find the mass of 0.5 moles of NaCl (M = 58.5 g/mol).</p>
        <p>Mass = n × M = 0.5 × 58.5 = 29.25 g</p>
      </div>

      <hr />

      <h3>6️⃣ Molarity and Solution Concentration</h3>
      <p>Molarity measures the number of moles of solute per liter of solution. It's widely used in chemical reactions, titrations, and stoichiometry.</p>
      <ul>
        <li>M = n / V, V in liters</li>
        <li>Used to calculate the exact amount of solute needed</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 3:</h4>
        <p>Find molarity of 2 moles of NaOH in 0.5 L water.</p>
        <p>M = 2 / 0.5 = 4 M</p>
      </div>

      <hr />

      <h3>7️⃣ Number of Particles</h3>
      <p>Once the number of moles is known, we can find the total number of particles:</p>
      <ul>
        <li>N = n × Nₐ</li>
        <li>Essential for calculating molecules, atoms, or ions in reactions.</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 4:</h4>
        <p>Number of molecules in 0.25 moles of CO₂:</p>
        <p>N = 0.25 × 6.022 × 10²³ ≈ 1.505 × 10²³ molecules</p>
      </div>

      <hr />

      <h3>8️⃣ Gas Volume at STP</h3>
      <p>At standard temperature and pressure (STP, 0°C & 1 atm):</p>
      <ul>
        <li>1 mole of any ideal gas occupies 22.4 L</li>
        <li>V = n × 22.4 L</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 5:</h4>
        <p>Volume of 0.5 moles of O₂ at STP:</p>
        <p>V = 0.5 × 22.4 = 11.2 L</p>
      </div>

      <hr />

      <h3>9️⃣ Percent Composition</h3>
      <p>Using moles, we can calculate % composition of elements in a compound:</p>
      <ul>
        <li>% element = (n × atomic mass of element / molar mass of compound) × 100</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 6:</h4>
        <p>% of H and O in H₂O:</p>
        <ul>
          <li>% H = (2×1 / 18) ×100 ≈ 11.11%</li>
          <li>% O = (16 / 18) ×100 ≈ 88.89%</li>
        </ul>
      </div>

      <hr />

      <h3>🔟 Practice Problems</h3>
      <ol>
        <li>Calculate moles in 50 g of Na₂CO₃.</li>
        <li>Find number of particles in 0.1 mole of Al.</li>
        <li>Determine molarity of 3 moles of HCl in 1.5 L solution.</li>
        <li>Calculate volume of 2 moles of N₂ at STP.</li>
        <li>Find % composition of C, H in CH₄.</li>
      </ol>

      <hr />

      <div class="summary-box">
        <p><strong>Summary:</strong> The mole concept connects mass, moles, and number of particles. It is fundamental in stoichiometry, solutions, gas laws, and analytical chemistry. Mastery of this concept allows precise calculation and understanding of chemical reactions and quantities.</p>
      </div>

      <hr />

      <h3>🔹 Diagram Prompts for AI Generation</h3>
      <ul>
        <li>"Diagram showing the relationship between mass, moles, and number of particles, with arrows connecting mass → moles → molecules/atoms, labeled Nₐ, M, and n, clean educational style."</li>
        <li>"Illustration of mole concept with a balance showing mass of substance, pile of molecules, and Avogadro's number, colorful and clear for chemistry textbook."</li>
        <li>"Flowchart showing conversions: mass ↔ moles ↔ number of particles, including molarity and gas volume at STP, suitable for educational use."</li>
      </ul>
    </div>
  `,
        },
      ],
    },
    math: {
      title: "Mathematics",
      subtopics: [
        {
          id: "calculus-basics",
          title: "Calculus Basics",
          content: `
            <div class="content-section">
              <h2>Introduction to Calculus</h2>
              <p>Calculus is the mathematics of change and motion, divided into differential and integral calculus.</p>
              
              <div class="formula-section">
                <h3>Basic Derivatives</h3>
                <div class="formula-grid">
                  <div class="formula-card">
                    <code>d/dx(xⁿ) = nxⁿ⁻¹</code>
                    <p>Power Rule</p>
                  </div>
                  <div class="formula-card">
                    <code>d/dx(sin x) = cos x</code>
                    <p>Trigonometric</p>
                  </div>
                  <div class="formula-card">
                    <code>d/dx(eˣ) = eˣ</code>
                    <p>Exponential</p>
                  </div>
                </div>
              </div>
            </div>
          `,
        },
      ],
    },
    biology: {
      title: "Biology",
      subtopics: [
        {
          id: "cell-biology",
          title: "Cell Biology",
          content: `
    <div class="content-section">
      <h2>📘 Cell Biology: The Unit of Life</h2>
      <p>The <strong>cell</strong> is the basic structural, functional, and biological unit of all living organisms. It carries out life processes and acts as the building block of tissues and organs.</p>

      <div class="highlight-box">
        <p><strong>Key Concept:</strong> "All living organisms are made of cells, and all cells arise from pre-existing cells."</p>
      </div>

      <hr />

      <h3>1️⃣ History and Discovery of Cells</h3>
      <ul>
        <li>1665: Robert Hooke discovered cells in cork slices and coined the term <em>"cell"</em> because they reminded him of small rooms.</li>
        <li>1674: Antonie van Leeuwenhoek observed living microorganisms using simple microscopes.</li>
        <li>1838-1839: Schleiden and Schwann formulated the <strong>Cell Theory</strong> — all plants and animals are made of cells.</li>
        <li>1855: Rudolf Virchow stated that all cells come from pre-existing cells (<em>Omnis cellula e cellula</em>).</li>
      </ul>

      <hr />

      <h3>2️⃣ Classification of Cells</h3>
      <p>Cells are classified into:</p>
      <ul>
        <li><strong>Prokaryotic Cells:</strong> No true nucleus, DNA in nucleoid, no membrane-bound organelles. Examples: bacteria, cyanobacteria.</li>
        <li><strong>Eukaryotic Cells:</strong> True nucleus, membrane-bound organelles. Examples: plant cells, animal cells, fungi, protists.</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example:</h4>
        <p>Bacteria are prokaryotic; human liver cells are eukaryotic. Plant cells have chloroplasts, while animal cells do not.</p>
      </div>

      <hr />

      <h3>3️⃣ Cell Structure and Organelles</h3>
      <p>Cells contain specialized structures called <strong>organelles</strong>:</p>
      <ul>
        <li><strong>Cell Membrane:</strong> Semi-permeable barrier regulating entry and exit.</li>
        <li><strong>Cytoplasm:</strong> Gel-like fluid housing organelles; site of biochemical reactions.</li>
        <li><strong>Nucleus:</strong> Contains DNA; controls cellular functions.</li>
        <li><strong>Mitochondria:</strong> Powerhouse producing ATP via cellular respiration.</li>
        <li><strong>Ribosomes:</strong> Protein synthesis; can be free or ER-bound.</li>
        <li><strong>Endoplasmic Reticulum (ER):</strong> Rough ER (protein synthesis), Smooth ER (lipid synthesis and detoxification).</li>
        <li><strong>Golgi Apparatus:</strong> Modifies, packages, and transports proteins and lipids.</li>
        <li><strong>Lysosomes:</strong> Digestive enzymes for waste breakdown.</li>
        <li><strong>Chloroplasts:</strong> Present in plant cells; site of photosynthesis.</li>
        <li><strong>Vacuoles:</strong> Storage for water, nutrients, and waste.</li>
        <li><strong>Cytoskeleton:</strong> Provides structural support and aids in intracellular transport.</li>
      </ul>

      <div class="highlight-box">
        <p><strong>Note:</strong> Prokaryotic cells lack most membrane-bound organelles. Eukaryotic cells have specialized organelles performing distinct functions.</p>
      </div>

      <hr />

      <h3>4️⃣ Cell Membrane and Transport</h3>
      <p>The cell membrane controls substance movement:</p>
      <ul>
        <li><strong>Passive Transport:</strong> Diffusion, osmosis, facilitated diffusion — no energy required.</li>
        <li><strong>Active Transport:</strong> Movement against concentration gradient using ATP.</li>
        <li><strong>Endocytosis:</strong> Engulfing large molecules into the cell.</li>
        <li><strong>Exocytosis:</strong> Expelling molecules out of the cell.</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example:</h4>
        <p>Oxygen enters red blood cells by diffusion (passive transport). Glucose may require active transport.</p>
      </div>

      <hr />

      <h3>5️⃣ Nucleus and Genetic Material</h3>
      <ul>
        <li>Contains DNA organized into chromosomes.</li>
        <li>Genes regulate protein synthesis and inheritance.</li>
        <li>Nuclear membrane controls RNA/protein transport.</li>
      </ul>

      <div class="highlight-box">
        <p><strong>Tip:</strong> The nucleolus synthesizes rRNA and assembles ribosome subunits.</p>
      </div>

      <hr />

      <h3>6️⃣ Mitochondria: Energy Production</h3>
      <ul>
        <li>Cellular respiration: <code>Glucose + O₂ → CO₂ + H₂O + ATP</code></li>
        <li>ATP fuels cell processes like active transport, growth, and division.</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example:</h4>
        <p>Muscle cells contain many mitochondria to meet high energy needs.</p>
      </div>

      <hr />

      <h3>7️⃣ Ribosomes and Protein Synthesis</h3>
      <p>Ribosomes read mRNA to synthesize proteins essential for enzymes, hormones, and structural components.</p>

      <div class="highlight-box">
        <p><strong>Key Point:</strong> Proteins are critical for cell function and signaling.</p>
      </div>

      <hr />

      <h3>8️⃣ Plant vs Animal Cells</h3>
      <table class="table">
        <thead>
          <tr><th>Feature</th><th>Plant Cell</th><th>Animal Cell</th></tr>
        </thead>
        <tbody>
          <tr><td>Cell Wall</td><td>Present (cellulose)</td><td>Absent</td></tr>
          <tr><td>Chloroplasts</td><td>Present</td><td>Absent</td></tr>
          <tr><td>Vacuole</td><td>Large central vacuole</td><td>Small or absent</td></tr>
          <tr><td>Shape</td><td>Regular, rectangular</td><td>Irregular, round</td></tr>
        </tbody>
      </table>

      <hr />

      <h3>9️⃣ Cell Division</h3>
      <ul>
        <li><strong>Mitosis:</strong> Produces 2 identical daughter cells, growth and repair.</li>
        <li><strong>Meiosis:</strong> Produces 4 non-identical gametes, genetic variation.</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example:</h4>
        <p>Skin cells divide by mitosis. Sperm and eggs form via meiosis.</p>
      </div>

      <hr />

      <h3>🔟 Specialised Cells</h3>
      <ul>
        <li>Neurons – nerve impulse transmission.</li>
        <li>Red blood cells – oxygen transport.</li>
        <li>Muscle cells – contraction and movement.</li>
        <li>Guard cells – control stomatal openings in plants.</li>
      </ul>

      <hr />

      <h3>1️⃣1️⃣ Cell Communication</h3>
      <p>Cells communicate using chemical signals, receptors, and junctions. Vital for multicellular coordination.</p>

      <hr />

      <h3>1️⃣2️⃣ Cell Organelles Summary</h3>
      <ul>
        <li>Cell membrane – protection & transport</li>
        <li>Cytoplasm – site of reactions</li>
        <li>Nucleus – control & genetic info</li>
        <li>Mitochondria – energy</li>
        <li>Ribosomes – protein synthesis</li>
        <li>ER – protein/lipid processing</li>
        <li>Golgi – packaging & transport</li>
        <li>Lysosomes – digestion</li>
        <li>Chloroplasts – photosynthesis (plants)</li>
        <li>Vacuole – storage</li>
      </ul>

      <hr />

      <h3>🔹 Practice Questions</h3>
      <ol>
        <li>List differences between prokaryotic and eukaryotic cells.</li>
        <li>Explain the role of mitochondria in energy production.</li>
        <li>Compare plant and animal cells.</li>
        <li>Describe mitosis and meiosis processes.</li>
        <li>Identify organelles responsible for protein synthesis.</li>
      </ol>

      <hr />

      <h3>🔹 Diagram</h3>
      <div class="image-container">
        <img src="${Cell}" alt="Detailed diagram of plant and animal cells with labeled organelles" />
        <p class="image-caption">Labeled diagram showing both plant and animal cell organelles</p>
      </div>

      <div class="summary-box">
        <p><strong>Summary:</strong> Cells are the fundamental units of life. Understanding their structure, types, organelles, and functions forms the foundation for studying genetics, physiology, and microbiology. Transport, communication, and division are critical cellular processes.</p>
      </div>
    </div>
  `,
        },

        {
          id: "digestive-system",
          title: "Human Digestive System",
          content: `
    <div class="content-section">
      <h2>🌟 Human Digestive System</h2>
      <p>The digestive system is responsible for breaking down food into nutrients, which are absorbed and used by the body for energy, growth, and repair.</p>

      <div class="highlight-box">
        <p><strong>Key Concept:</strong> Digestion involves mechanical and chemical processes to convert complex food into simpler forms.</p>
      </div>

      <hr />

      <h3>1️⃣ Main Parts of Digestive System</h3>
      <ul>
        <li>Mouth – mechanical digestion via chewing and chemical digestion via salivary amylase.</li>
        <li>Esophagus – transports food to the stomach via peristalsis.</li>
        <li>Stomach – protein digestion via pepsin, acidic environment (HCl).</li>
        <li>Small intestine – site of majority absorption; enzymes from pancreas aid digestion.</li>
        <li>Large intestine – water absorption, formation of feces.</li>
        <li>Liver – produces bile to emulsify fats.</li>
        <li>Pancreas – secretes digestive enzymes and bicarbonates.</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example:</h4>
        <p>Carbohydrates like starch are broken down to glucose by amylase enzymes in mouth and small intestine.</p>
      </div>

      <hr />

      <h3>2️⃣ Digestive Processes</h3>
      <ul>
        <li><strong>Ingestion:</strong> Intake of food.</li>
        <li><strong>Propulsion:</strong> Swallowing and peristalsis.</li>
        <li><strong>Mechanical digestion:</strong> Chewing and churning.</li>
        <li><strong>Chemical digestion:</strong> Enzymatic breakdown of macromolecules.</li>
        <li><strong>Absorption:</strong> Nutrients absorbed in small intestine.</li>
        <li><strong>Defecation:</strong> Removal of undigested waste as feces.</li>
      </ul>

      <div class="highlight-box">
        <p><strong>Tip:</strong> Digestive enzymes are specific: amylase for carbohydrates, proteases for proteins, lipases for fats.</p>
      </div>

      <hr />

      <h3>3️⃣ Common Digestive Disorders</h3>
      <ul>
        <li>Acidity and heartburn – excess HCl.</li>
        <li>Constipation – water not absorbed properly.</li>
        <li>Jaundice – liver disease, bilirubin accumulation.</li>
        <li>Diarrhea – infection or poor absorption.</li>
      </ul>

      <hr />

      <h3>🔹 Human Digestive System</h3>
      <div class="image-container">
     <img src="${HumanDigestiveSystem}" alt="Human Respiratory System" />
     <p class="image-caption">Complete human respiratory system showing nose, pharynx, larynx, trachea, bronchi, lungs with alveoli, and diaphragm</p>
     </div>

    </div>
  `,
        },
        {
          id: "respiratory-system",
          title: "Human Respiratory System",
          content: `
    <div class="content-section">
      <h2>🌬️ Human Respiratory System</h2>
      <p>The respiratory system is responsible for the intake of oxygen and the removal of carbon dioxide, essential for cellular respiration and maintaining homeostasis.</p>

      <div class="highlight-box">
        <p><strong>Key Concept:</strong> Oxygen from inhaled air diffuses into blood, while carbon dioxide produced in cells is expelled from the body through exhalation.</p>
      </div>

      <hr />

      <h3>1️⃣ Structure and Main Organs</h3>
      <ul>
        <li><strong>Nose and Nasal Cavity:</strong> Filters dust and microbes, warms and moistens air, and detects smell.</li>
        <li><strong>Pharynx (Throat):</strong> Common passage for air and food, connects nasal cavity to larynx.</li>
        <li><strong>Larynx (Voice Box):</strong> Contains vocal cords, responsible for sound production, prevents food from entering trachea.</li>
        <li><strong>Trachea (Windpipe):</strong> Tube with cartilage rings providing structural support, transports air to bronchi.</li>
        <li><strong>Bronchi and Bronchioles:</strong> Bronchi branch into smaller bronchioles inside the lungs, distributing air to alveoli.</li>
        <li><strong>Lungs:</strong> Main organs for gas exchange, contain millions of alveoli.</li>
        <li><strong>Alveoli:</strong> Tiny air sacs with thin walls surrounded by capillaries, site of oxygen and carbon dioxide exchange.</li>
        <li><strong>Diaphragm:</strong> Dome-shaped muscle at the base of the lungs; contraction expands thoracic cavity, aiding inhalation.</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example:</h4>
        <p>When you inhale, oxygen enters alveoli and diffuses into the blood. Hemoglobin binds oxygen and carries it to tissues.</p>
      </div>

      <hr />

      <h3>2️⃣ Mechanism of Breathing</h3>
      <ul>
        <li><strong>Inhalation:</strong> Diaphragm contracts, rib cage expands, lung volume increases, air rushes in due to negative pressure.</li>
        <li><strong>Exhalation:</strong> Diaphragm relaxes, rib cage moves inward, lung volume decreases, air expelled due to positive pressure.</li>
        <li><strong>Gas Exchange:</strong> Oxygen diffuses from alveoli to capillaries; carbon dioxide diffuses from blood to alveoli.</li>
      </ul>

      <div class="highlight-box">
        <p><strong>Key Point:</strong> The rate and depth of breathing are controlled by the medulla oblongata in response to CO2 concentration in blood.</p>
      </div>

      <hr />

      <h3>3️⃣ Transport of Gases in Blood</h3>
      <ul>
        <li>Oxygen transport: Mostly bound to hemoglobin as oxyhemoglobin; a small amount dissolves in plasma.</li>
        <li>Carbon dioxide transport: Dissolved in plasma, as bicarbonate ions, and bound to hemoglobin as carbaminohemoglobin.</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example:</h4>
        <p>During exercise, muscles produce more CO2, increasing respiratory rate to expel excess CO2 and supply more O2.</p>
      </div>

      <hr />

      <h3>4️⃣ Control of Breathing</h3>
      <ul>
        <li>Breathing is involuntary but can be voluntarily controlled to some extent.</li>
        <li>Medulla oblongata regulates rhythm and depth.</li>
        <li>Chemoreceptors detect CO2 levels in blood and adjust breathing rate.</li>
      </ul>

      <div class="highlight-box">
        <p><strong>Note:</strong> High CO2 concentration stimulates faster breathing, low CO2 slows it down. Oxygen levels have less influence under normal conditions.</p>
      </div>

      <hr />

      <h3>5️⃣ Respiratory Volumes and Capacities</h3>
      <ul>
        <li><strong>Tidal Volume (TV):</strong> Air inhaled/exhaled during normal breathing (~500 mL).</li>
        <li><strong>Inspiratory Reserve Volume (IRV):</strong> Additional air inhaled after normal inspiration.</li>
        <li><strong>Expiratory Reserve Volume (ERV):</strong> Additional air exhaled after normal expiration.</li>
        <li><strong>Vital Capacity (VC):</strong> Maximum air exhaled after maximum inhalation.</li>
        <li><strong>Residual Volume (RV):</strong> Air remaining in lungs after forced exhalation.</li>
      </ul>

      <hr />

      <h3>6️⃣ Common Respiratory Disorders</h3>
      <ul>
        <li><strong>Asthma:</strong> Inflammation and narrowing of airways; difficulty breathing.</li>
        <li><strong>Bronchitis:</strong> Infection and inflammation of bronchi.</li>
        <li><strong>Pneumonia:</strong> Lung infection causing fluid in alveoli, reducing gas exchange.</li>
        <li><strong>Emphysema:</strong> Alveolar wall damage, often due to smoking; reduces lung elasticity.</li>
        <li><strong>COVID-19:</strong> Viral infection affecting lungs; may cause pneumonia and reduced oxygen absorption.</li>
      </ul>

      <hr />

      <h3>7️⃣ Role in Homeostasis</h3>
      <ul>
        <li>Maintains blood pH by regulating CO2 concentration.</li>
        <li>Supports cellular respiration by providing O2 for ATP production.</li>
        <li>Removes metabolic waste (CO2) efficiently.</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example:</h4>
        <p>During high-altitude exposure, respiratory rate increases to compensate for lower oxygen availability, maintaining homeostasis.</p>
      </div>

      <hr />

      <h3>8️⃣ Human Respiratory System</h3>
     <div class="image-container">
     <img src="${humanrespiratorysystem}" alt="Human Respiratory System" />
     <p class="image-caption">Complete human respiratory system showing nose, pharynx, larynx, trachea, bronchi, lungs with alveoli, and diaphragm</p>
     </div>


      <hr />

      <div class="summary-box">
        <p><strong>Summary:</strong> The respiratory system is crucial for oxygen supply, CO2 removal, and maintaining homeostasis. Key processes include ventilation, gas exchange, and transport of gases. Proper lung function is essential for health, and disorders like asthma, bronchitis, and emphysema impair respiratory efficiency.</p>
      </div>
    </div>
  `,
        },
      ],
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const selectedBlog = blogsData[subject || ""];
      if (selectedBlog) {
        setBlog(selectedBlog);
        setActiveSubtopic(selectedBlog.subtopics[0]?.id || "");
      } else {
        setBlog({
          title: "Subject Not Found",
          subtopics: [
            {
              id: "notfound",
              title: "Not Found",
              content:
                '<div class="error-message"><p>🚫 The requested subject is not available. Please check the URL or navigate to Physics, Chemistry, Math, or Biology.</p></div>',
            },
          ],
        });
        setActiveSubtopic("notfound");
      }
      setLoading(false);
    }, 500); // Simulate loading delay

    return () => clearTimeout(timer);
  }, [subject]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading {subject} content...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="error-container">
        <h2>Content Not Available</h2>
        <p>Unable to load the requested subject.</p>
      </div>
    );
  }

  const currentSubtopic = blog.subtopics.find((st) => st.id === activeSubtopic);

  return (
    <div className="blog-detail-container">
      {/* Navigation Sidebar */}
      <nav className="blog-left">
        <div className="sidebar-header">
          <h3>{blog.title} Topics</h3>
          <span className="topics-count">{blog.subtopics.length} topics</span>
        </div>

        <ul className="subtopics-list">
          {blog.subtopics.map((subtopic) => (
            <li
              key={subtopic.id}
              className={`subtopic-item ${
                activeSubtopic === subtopic.id ? "active" : ""
              }`}
              onClick={() => setActiveSubtopic(subtopic.id)}
            >
              <span className="subtopic-number">
                {/* {String(index + 1).padStart(2, "0")} */}
              </span>
              <span className="subtopic-title">{subtopic.title}</span>
              {activeSubtopic === subtopic.id && (
                <span className="active-indicator"></span>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content Area */}
      <main className="blog-right">
        <header className="blog-header">
          <div className="breadcrumb">
            <span>Education</span>
            <span className="separator">/</span>
            <span>{blog.title}</span>
            <span className="separator">/</span>
            <span className="current-topic">
              {currentSubtopic?.title || "Select a Topic"}
            </span>
          </div>

          <h1 className="blog-title">{blog.title}</h1>
          <p className="blog-meta">
            📚 Educational Content | 🕐 Updated:{" "}
            {new Date().toLocaleDateString()} | 📖 {blog.subtopics.length}{" "}
            Topics
          </p>
        </header>

        {/* Dynamic Content */}
        <article className="blog-content">
          {currentSubtopic ? (
            <section
              className="content-display"
              dangerouslySetInnerHTML={{ __html: currentSubtopic.content }}
            />
          ) : (
            <div className="no-content">
              <h3>Welcome to {blog.title}!</h3>
              <p>Select a topic from the sidebar to start learning.</p>
            </div>
          )}
        </article>

        {/* Navigation Footer */}
        <footer className="content-footer">
          <div className="navigation-help">
            <p>
              💡 <strong>Tip:</strong> Use the sidebar to navigate between
              different topics
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default BlogDetail;

